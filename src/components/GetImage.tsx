// @ts-ignore
import React, { useState} from "react";
// @ts-ignore
import EXIF from 'exif-js'
import ipfs from "../ipfs";
import MetadataExport from "./metadataExport";
import {Simulate} from "react-dom/test-utils";
import './GetImage.css'
import verification from "./verification";
import GetDataForVerif from "./GetDataForVerification";
import createNFT from "./createNFT";



export const GetImage = ({account, contract}:{account:string, contract:any})=>{

    /*
    State load images and metadatas
     */
    const [img1, setImg1] =useState<any>();
    const [img2, setImg2] = useState<any>();
    let [imgHash, setImgHash] = useState<string[]>([])
    let [MetaDataImg1, setMetaDataImg1] = useState<any>()
    let [MetaDataImg2, setMetaDataImg2] = useState<any>()
    const [validate, setvalidate] = useState<boolean>(false)

    /*
    Interface composent
     */

    let [debuging, setDebuging] = useState<boolean>(false)
    let [img1Done, setimg1Done] = useState<boolean>(false)
    let [loading, setLoading] = useState<number>(0)
    let [tokenCreated, setTokenCreated]= useState<boolean>(false)
    let [test, setTest] = useState<boolean>(false)


    let verif:boolean = false;

    const captureImg1 = (event:any) =>{
        console.log('image 1 deposed')
        event.preventDefault()
        const file1 = event.target.files[0]
        setImg1(file1);
        setimg1Done(true)


        if (file1 && file1.name){
            EXIF.getData(file1, function (){
                let exifDataImg1 = EXIF.pretty(file1);
                if (exifDataImg1) {
                    try {
                        const allMetaDataImg1 = EXIF.getAllTags(file1)
                        setMetaDataImg1(allMetaDataImg1)
                        console.log(allMetaDataImg1)
                        }catch (e){
                            console.log(e)

                        }
                    }
                }
            )
        }
        else{
            return <div><h3>Your pictures do not includes gps metadatas </h3></div>
                }

        }




    const captureImg2 = (event:any) =>{
        console.log('image 2 deposed')
        event.preventDefault()
        const file2 = event.target.files[0]
        setImg2(file2);


        if (file2 && file2.name){
            EXIF.getData(file2, function (){
                let exifDataImg2 = EXIF.pretty(file2)
                if (exifDataImg2){
                    try {
                        const allMetaDataImg2 = EXIF.getAllTags(file2)
                        setMetaDataImg2(allMetaDataImg2)
                        console.log(allMetaDataImg2)
                    } catch (e) {
                        console.log(e)
                    }
                }
            })
        }

    }

    const ImgOnIpfs = async (img:any) => {


        const reader = new window.FileReader()
        reader.readAsArrayBuffer(img)
        reader.onloadend = () => {
            // @ts-ignore
            if (typeof reader.result !== 'null') {
                // @ts-ignore
                const buffer = new Buffer(reader.result)

                ipfs.files.add(buffer, async (error: any, result: any) => {
                    await result
                    setLoading(+1)
                    console.log(result)
                    console.log(loading)
                    if (result[0].hash !== undefined) {
                        await setImgHash(prevState => [...prevState, result[0].hash])

                    }
                    else if (error) {
                        console.log(error)
                        return
                    }
                    return result
                })
            }
        }
    }





    const validateTestNFT=async ()=>{
        const uri:string = await MetadataExport(MetaDataImg1, MetaDataImg2, imgHash[0], imgHash[1] )
        await contract.methods.NFTCreationForTest(uri, account).send(
            {from:account}
        )
        console.log(`https://ipfs.io/ipfs/${uri}`)
        setTokenCreated(true)
        setTest(true)


    }

    const SendToVerificator = async ()=>{
        const uri:string = await MetadataExport(MetaDataImg1, MetaDataImg2, imgHash[0], imgHash[1]);
        await contract.methods.NeedToBeValidate(uri).send(
            {from:account}
        );
        setTokenCreated(true)
    }

    const UploadImages = ()=>{
        return(
            <div className="input1">
                <label htmlFor="img1">The first picture</label>
                <input type='file' id="img1" onChange={captureImg1}/>
                {
                    img1Done == false ? <div></div>:

                            <div className="input2">
                                <label htmlFor="img2">The second picture</label>
                                <input type='file' id="img2" onChange={captureImg2}/>
                                <br/>
                                <input className="btn-validate" onClick={onSubmit} value="Validate"/>
                            </div>
                }

                {
                    debuging == false ? <div></div>
                        :
                        <div><h5>Your images are invalid, they do not include metadata</h5></div>

                }

            </div>

        )
    }

    const Result = ()=>{
        if (test == true) {
            return (
                <div>
                    <h3>Congrats !</h3>
                    <ul>
                        <li><p>You just receive 100 jobcoins !</p>
                            <p>To see it in your crypto wallet, add assets and enter "address JOBCOIN contract"</p>
                        </li>
                        <li><p>You can see your trashtag on "My TrashTags"</p></li>
                    </ul>
                </div>
            )
        }else {
            return (
                <div>
                    <h3>Your trashtag challenge has been sent to Verificators</h3>
                    <br/>
                    <h3>If your trashtag token is validate, you will receive an trashtag Token wich represent your ecological action</h3>
                    <h3>And 100 JBC</h3>

                </div>
            )
        }
    }




    const onSubmit= async (event:any)=>{
        event.preventDefault()
        console.log("On submit")


        /*
        if (MetaDataImg1 !== undefined && MetaDataImg2 !==undefined )
        verif = verification(MetaDataImg1,MetaDataImg2)
        console.log(verif)
        if (verif === true) {

         */

        await ImgOnIpfs(img1);

        await ImgOnIpfs(img2);

        setDebuging(false)
        setvalidate(true)
        console.log(validate)
        /*
        }
        else {
            setDebuging(true)
        }

         */


    }


    return (
        <div>
            {tokenCreated == true ?
                <Result/>
                :
                <div>
                    {validate == true ?
                        <div>
                            {debuging == true ?
                                <div><h5>Your images are invalid, they do not include metadata</h5></div>
                                :
                                <div></div>
                            }

                        {imgHash[1] == undefined ? <div id="loader" className="text-center mt-5">
                                <h3>Loading...</h3>
                                    <h3>Images and metadatas are uploading to ipfs</h3>
                                </div>
                                :

                                <div className='container-rendering'>
                                    <div>


                                    </div>
                                    <img src={`https://ipfs.io/ipfs/${imgHash[0]}`} alt="" className="trash-img1"/>
                                    <img src={`https://ipfs.io/ipfs/${imgHash[1]}`} alt="" className="trash-img2"/>
                                    <button className="btn" onClick={SendToVerificator}>Send to Verificator</button>
                                    <button className="btn test" onClick={validateTestNFT}>Validate your Test Trashtag
                                        Token (without verfication)
                                    </button>
                                </div>
                        }
                        </div>

                        :

                        <div>
                            <UploadImages/>
                        </div>
                    }
                </div>
            }
        </div>
    )



}

export default GetImage;




