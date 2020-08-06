Token Contract in AssemblyScript
================================

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/near-examples/token-contract-as)

<!-- MAGIC COMMENT: DO NOT DELETE! Everything above this line is hidden on NEAR Examples page -->

This project contains an implementation of a token contract similar to [ERC20](https://theethereum.wiki/w/index.php/ERC20_Token_Standard) but simpler. We'll visit a page, sign in and use your browser's console to run commands to initialize, send, and get the balance of a custom token.

**Note**: this example uses a basic version of a token. It is not the supported token contract laid out in the [NEAR Enhancement Proposal for non-fungible tokens](https://github.com/nearprotocol/NEPs/pull/4).
Visit [this example](https://github.com/near-examples/NFT) illustrating implementations of the non-fungible token in Rust and AssemblyScript. It is not recommended to deploy non-fungible tokens written in AssemblyScript for financial use cases.


Getting started
===============

There's a button at the top of this file that says "Open in Gitpod." If you want to try out this project as fast as possible, that's what you want. It will open the project in your browser with a complete integrated development environment configured for you. If you want to run the project yourself locally, read on.

There are two ways to run this project locally. The first is quick, and a good way to instantly become familiar with this example. Once familiar, the next step is to create your own NEAR account and deploy the contract to testnet.


Quick option
---------------

1. Install dependencies:

    yarn

2. Build and deploy this smart contract to a development account. This development account will be created automatically and is not intended for reuse:

    yarn dev


Standard deploy option
----------------------

In this second option, the smart contract will get deployed to a specific account created with the NEAR Wallet.

1. Ensure `near-cli` is installed by running:

       near --version

   If needed, install `near-cli`:

       npm install near-cli -g

2. If you do not have a NEAR account, please create one with [NEAR Wallet](https://wallet.nearprotocol.com). Then, in the project root, login with `near-cli` by following the instructions after this command:

       near login

3. Modify the top of `src/config.js`, changing the `CONTRACT_NAME` to be the NEAR account that you just used to log in.

       const CONTRACT_NAME = process.env.CONTRACT_NAME || 'YOUR_ACCOUNT_NAME_HERE'; /* TODO: fill this in! */

4. Start the example!

       yarn start


Exploring The Code
==================

1. The backend code lives in the `/assembly` folder. This code gets deployed to
   the NEAR blockchain when you run `yarn deploy:contract`. This sort of
   code-that-runs-on-a-blockchain is called a "smart contract" – [learn more
   about NEAR smart contracts][smart contract docs].
2. The frontend code lives in the `/src` folder.
   [/src/index.html](/src/index.html) is a great place to start exploring. Note
   that it loads in `/src/main.js`, where you can learn how the frontend
   connects to the NEAR blockchain.
3. Tests: there are different kinds of tests for the frontend and backend. The
   backend code gets tested with the [asp] command for running the backend
   AssemblyScript tests, and [jest] for running frontend tests. You can run
   both of these at once with `yarn test`.

Both contract and client-side code will auto-reload as you change source files.

  [smart contract docs]: https://docs.nearprotocol.com/docs/roles/developer/contracts/assemblyscript
  [asp]: https://www.npmjs.com/package/@as-pect/cli
  [jest]: https://jestjs.io/
