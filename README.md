# Ethers Simple Storage

This is part of the FreeCodeCamp Solidity & Javascript Blockchain Course.

Video Coming Soon...

# Getting Started

## Requirements

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  - You'll know you did it right if you can run `git --version` and you see a response like `git version x.x.x`
- [nodejs](https://nodejs.org/en/download/)
  - You'll know you did it right if you can run `node --version` and you see a response like `vx.x.x`
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
  - You'll know you did it right if you can run `npm --version` and you get an output like `x.x.x`
  - Often `npm` comes with the `nodejs` install
- [ganache](https://trufflesuite.com/ganache/)
  - You'll know you did it right if you can run the application and see:
    <br>
    <img src="./img/ganache-picture.png" alt="ganache" width="200"/>
  - You can alternatively use [ganache-cli](https://www.npmjs.com/package/ganache-cli) or [hardhat](https://hardhat.org/)

## Setup

Clone this repo

```
git clone https://github.com/PatrickAlphaC/ethers-simple-storage
cd ethers-simple-storage
```

Then install dependencies

```
npm install
```

### Typescript

If you like `typescript`, run `git checkout typescript` then run `npm install`

## Useage

1. Run your ganache local chain, by hitting `quickstart` on your ganache application

> Save the workspace. This way, next time you open ganache you can start the workspace you've created, otherwise you'll have to redo all the steps below.

2. Copy the `RPC SERVER` sting in your ganache CLI, and place it into your `.env` file similar to what's in `.env.example`.

<img src="./img/ganache-http.png" alt="ganache" width="500"/>

`.env` Example:

```
RPC_URL=http://0.0.0.0:8545
```

3. Hit the key on one of the accounts, and copy the key you see and place it into your `.env` file, similar to what you see in `.env.example`.

<img src="./img/ganache-key.png" alt="ganache" width="500"/>

<img src="./img/ganache-private-key.png" alt="ganache" width="500"/>

`.env` Example:

PRIVATE_KEY=11ee3108a03081fe260ecdc106554d09d9d1209bcafd46942b10e02943effc4a

4. Compile your code

Run

```
npm rum compile
```

You'll see files `SimpleStorage_sol_SimpleStorage.abi` and `SimpleStorage_sol_SimpleStorage.bin` be created.

5. Run your application

```
node deploy.js
```

### Deploying to a testnet

Make sure you have a [metamask](https://metamask.io/) or other wallet, and export the private key.

**IMPORTANT**

USE A METAMASK THAT DOESNT HAVE ANY REAL FUNDS IN IT. Just in case you accidentally push your private key to a public place. I _highly_ recommend you use a different metamask or wallet when developing.

1. [Export your private key](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key) and place it in your `.env` file, as done above.

2. Go to [Alchemy](https://alchemy.com/?a=673c802981) and create a new project on the testnet of choice (ie, kovan or Rinkeby)
3. Grab your URL associated with the testnet, and place it into your `.env` file.
4. Make sure you have [testnet ETH](https://faucets.chain.link/) in your account. You can [get some here.](https://faucets.chain.link/). You should get testnet ETH for the same testnet that you made a project in Alchemy (ie, Rinkeby or Kovan)
5. Run

```
node deploy.js
```

# Thank you!

If you appreciated this, feel free to follow me or donate!

ETH/Polygon/Avalanche/etc Address: 0x9680201d9c93d65a3603d2088d125e955c73BD65

[![Patrick Collins Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/PatrickAlphaC)
[![Patrick Collins YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/channel/UCn-3f8tw_E1jZvhuHatROwA)
[![Patrick Collins Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/patrickalphac/)
[![Patrick Collins Medium](https://img.shields.io/badge/Medium-000000?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@patrick.collins_58673/)
