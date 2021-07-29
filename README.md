# TrashTag DAPP


## Contents

- [Submission or project name](#submission-or-project-name)
    - [Contents](#contents)
    - [Short description](#short-description)
        - [What's the problem?](#whats-the-problem)
        - [How can technology help?](#how-can-technology-help)
        - [The idea](#the-idea)
    - [Demo video](#demo-video)
    - [The architecture](#the-architecture)
    - [Long description](#long-description)
    - [Project roadmap](#project-roadmap)
    - [Getting started](#getting-started)
    - [Live demo](#live-demo)
    - [Built with](#built-with)
    - [Contributing](#contributing)
    - [Versioning](#versioning)
    - [Authors](#authors)
    - [License](#license)
    - [Acknowledgments](#acknowledgments)

## Short description

### What's the problem?


Wild pollution is a common problem in devlopped and in-developpement countries. This kind of pollution lead to a destruction of natural ecosystem and can be a source of potential desease. Plastic pollution in water supplies is responsible of the onset of desease such as Chloéra and dysenterie. The problem is that is very hard to fight against this kind of pollution because it’s very expensive to paid people to clean up natural areas.

### How can technology help?

Today the most known cryptocurrency is Bitcoin, where the inflation system work with an electrical heavy consumption proof of work algorithm. That's mean to create a new bitcoin you need to resolve very complex mathematical problems.
We believe that the blockchain environment is more mature thanks to smart contracts. So we created the Jobcoin. A cryptocurrency where a new supply is created each time a Trash tag challenge is done and verify. To remind, a Trash tag challenge is an ecological action where people find a place with wild pollution, take a picture, clean it up and take a picture again to show the work done. The ambition is to create an economic interests to protect natural environment for anyone.



### The idea

Our world is changing, we learn at school that a majority of job do not exist yet.
We believe that the blockchain revolution can lead to a new form of employment. An employment where financial speculation can be directly connect to value creation. That's may be possible thanks to new form of organizations which are DAO or Decentralized Autonomous Organization, the future of ONG.
Blockchain job is basically task job which are finance by cryptocurrencies.
You can look at blockchain job section in our long description to see how we could apply this technology to Zero Hungers and Green production probkems.
Like in the delivery industry where the most expensive sector is the last-kilometer shipment. We think if we creat a new form of job to collect wastes no matter where it is. It would permit to local authority to economize money in collect of waste and to reinvest this money to permit the recycling of waste. By this way, we want to privatize the fact of collect wild pollution waste to let local authority the possibility to create recycling center.




Inspired bu the trashtag challenge which was a twitter challenge created in 2019, the concept were to find a place full of waste, take a pictures, clean it up, take a picture again to show the work done, and post it on twitter. We want to bring this idea to a new scale thanks to the blockchain technology. We had the idea of a trashtag Token which are basicaly an Non-fongible token wich are created to represent an trashtag challenge. Futhermore, each time a trashtag warrior

## Demo video

[![Watch the video](https://github.com/Call-for-Code/Liquid-Prep/blob/master/images/readme/IBM-interview-video-image.png)](https://youtu.be/vOgCOoy_Bx0)

## The architecture

![Video transcription/translation app](./readmePict/untitled@2x.png)

1. The Trashtag warrior connect with his crytpo wallet to the interface and upload trashtag pictures
2. Metadatas (pictures, localisation, date, orientation) are send to a decentralised storage network IPFS (standard for non-fongible token)
3. IPFS return an CID url
4. CID of Metadatas and trashtag warrior blockchain address are send in a waiting list on our smart-contracts 
5. Verificator interface receive the last trashtag challenge cid
6. Interface extract data from IPFS thanks to the CID
7. Trashtag Pictures are show to the verificators
8. If the Verificator valid th trashtag, 100JBC and a trashtag token will be created for the trashtag warrior.
9. Each time a trashtag is validated, pictures are send to the watson AI to train our model of trash tag recognition.

## Long description

[More detail is available here](./docs/DESCRIPTION.md)

## Project roadmap

Deployment on Rinkeby tesrnet (July)
Smart contract audit
Launch of Trashtag Dapp on the polygon (or IBM blockchain evm compatible?) mainnet
ICO of jobcoin
Rise a community of Trashtag warrior and verificators
Creation of DAO
Deployment of the decentralised Autonomous Organisation

The project currently does the following things.

- Create Non-fongible token to represent Trashtag Challenge
- Mint 100 JobCoin for initiator of a trashtag challenge
  Visualisation of your Trashtag token (Non-fongible token)
- Staking system for verificator (https://www.coinbase.com/fr/learn/crypto-basics/what-is-staking)*


See below for our proposed schedule on next steps after Call for Code 2021 submission.

![Roadmap](./readmePict/roadmap@2x.png)

## Getting started

###1. git clone https://github.com/adrian-blockchain/Trashtag-dapp

###2. npm install

###3. npm start


Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

## Live demo

You can find a running system to test at [Trashtag-dapp](https://trashtagdapp.eu-gb.cf.appdomain.cloud/).

## Built with

- [IBM Cloud Foundry](https://www.ibm.com/cloud/cloud-foundry) - To host our the interface of our web application
- [IBM Watson AI for Visual recognition](https://developer.ibm.com/technologies/vision/) - To develop a model of AI to detect trashtag challenge
- [Rinkeby Ethereum testnet](https://www.rinkeby.io) - Smart-contracts are immutable, so we wanted to test our dapp on a test network 

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

- Maë Bain (https://www.linkedin.com/in/ma%C3%AB-bain-164821192/)
- Adrian Kinsey-Hillou (https://www.linkedin.com/in/adrian-kinsey-hillou-241025203/)
- Erwann David (https://www.linkedin.com/in/erwann-david-949b49173/)

## License

This project is licensed under the Apache 2 License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to all the Blockchain Lab of Garage ISEP, Nicolas Pasquier, Kevin Chhoa, Eyad Abdellatif, Enzo Cogneville and Raphaël Raux
- Thanks to Marion Fernandes, Clemence Verbergt and Maxime Antoine for their partcipation for the first decentralized trashtag challenge
- Thanks to Lucie Philipot and the newspapper l'union for their article about our project
- Thanks to Mamie Anne for the support

