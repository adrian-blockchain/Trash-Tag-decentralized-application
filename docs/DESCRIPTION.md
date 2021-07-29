a. Trash tag Challenge

When detritus are throw away, they generally end up in river because of the rain and wind which push them away. The ambition with our TrashTag decentralized application is to incite people to collect detritus as fast as possible before that end up in water supplies. Water supplies pollution is responsible for onset of disease such as cholera, dysentery and diarrhea.
Furthermore, we believe that if the local waste collection is ensured by decentralized job in developing countries, it could permit for local authorities to reinvest the saving to create recycling center.

b. Decentralized application

A decentralized application is an interface connected to the blockchain. In this kind of application, blockchain has to manage all logical transfer of value that the DAPP include. To understand the usefulness of blockchain, we need to think that it is a worldwide network which permit the transfer of value in a peer-to-peer way without trusted third.
In our Dapp, we can find two forms of value :

First, the Trash tag Token is a non-fungible value, that’s mean, every Trash tag token has a unique identity on the blockchain. To create that, we used the ERC1155 standard, this NFT’s standard allowed us to improve the gas efficiency of our DAPP.

Secondly, the Jobcoin, is a regular ERC20 token, it means that it respects every security rules fix by the Ethereum organization. It’s a fungible token, that’s mean every coin of the jobcoin supply has the same value.
To interact with these values, we use “Smart-Contracts”. Contract is the name of code which are deployed on the blockchain. It allowed us to add logical in interactions with values.

c. Blockchain

As beginner in blockchain development, we only know to code in solidity programming language. So we had to find an Ethereum virtual machine compatible blockchain. Here, three choice was open to us:

Ethereum 
Binance Smart-Chain 
Polygon side chain


The actual Ethereum gas fees price stop the possibility of mass adaption of decentralized application. So, to ensure the scalability of our application, we had the choice between the polygon network and the binance smart-chain. However, we strongly believe in the importance of decentralized technologies to ensure the democratization of our project. So we decided to migrate the main net version of our decentralized application on the polygon network.

For the moment, our smart-contracts are deployed on the Ethereum rinkeby test net. It is to simplify the process of installation of a decentralized wallet and the free of gas fees.


d. Non-fungible token and trash tag challenge


A non-fungible token is the representation of a value which cannot be replicated. Today, this technology is used in different domain, like crypto-artist to create digital art or for food traceability. In our case, a trash tag token is the representation of a precise localization and an amount  of time spend to protect environment by collecting detritus.
We are receiving GPS localization, phone orientation and precise date time thanks to a JavaScript libraries (exif.js) which allow us to extract data from pictures. Then, we post pictures to a decentralized storage which are call IPFS, this API return to us a hash for each picture. Finally, these data are assembled in a JSON file and post again to IPFS. To follow the idea of decentralization, we had to deploy our data on a decentralized network because it permits the immutability of information, which are the purpose of blockchain.
Trash tag warriors can look for their Trash tag Token in the “YourTrashtags” section of our web app.





e. Job coin

Jobcoin is way more than a tradable cryptocurrency, Jobcoin has an important role for the functioning of our decentralized application. To work our system needs verificators, to ensure the sincerity of judgement done by verificators, we had the idea to create a staking system. The concept is that verificators need to stake 1000 Jobcoins, when Jobcoin will be deployed to the main net, this crypto may have value. So if the stake of the verificator is representing a real amount of money, he should be more willing to tell the truth about the trash tag challenge. The judgement system can be look on “./trashtag-dapp/contract/trashtagDAPP.sol”, it’s a smart-contract. That’s mean rules which are established here could not be change by any hackers. The reward system is directly manage in smart-contracts.


f. Blockchain job

We believe that, small actions can have a big impact in the development of
societies. So, the goal with the jobcoin is to give the possibility to finance small action or job which are essential for the development, but today not economically interesting.

For example, we have already imagined  how to apply blockchain jobs to Zero Hungers and green production problems. In the poorest areas of the world, agriculture suffers from: droughts or inundation, poor performances and in isolated place, lack of material. From these lands, farmers earn meager income, so they do not have the money to invest in improving their plantations. We believe that if we create a blockchain job to incite independent person which are directly present in these areas to made natural fertilizer, we would be able to ensure the trade between fertilizer makers and farmers thanks to the blockchain. We can imagine a system where we publish recipes to made natural fertilizers with the latest news in this domain. Then anyone  can make fertilizer and give it to a farmer. After verification from the farmer, he could accept the trade and automatically unlock Jobcoin reward to the fertilizer maker. Thanks to this blockchain job it could improve performance of farmers production, ensure a green production thanks to natural fertilizer and give job for unemployed person.


g. Decentralized Autonomous Organization

Wikipedia defines DAO (Decentralized Autonomous Organization) as an organization represented by rules encoded as a transparent computer program, controlled by the organization members, and not influenced by a central government. As the rules are embedded into the code, no managers are needed, thus removing any bureaucracy or hierarchy hurdles.
The final ambition, with the jobcoin, is to create an DAO where anyone can propose a new blockchain job. Every Jobcoin holder would be able to validate or decline the adding of a new blockchain job thanks to democratic votes.
