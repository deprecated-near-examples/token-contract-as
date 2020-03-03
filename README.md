# Token Contract in AssemblyScript
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/nearprotocol/token-contract-as)

## Description

This project contains implementation of token contract similar to [ERC20](https://theethereum.wiki/w/index.php/ERC20_Token_Standard). The contract allows you to launch a new token on top of the NEAR blockchain which users can interact with as if it were any other token -- checking balances, transferring, etc.

This is a back-end contract only so there is no front-end included.


## Getting started
Install dependencies:

```
yarn
```

Make sure you have `near-shell` by running:

```
near --version

```

If you need to install `near-shell`:

```
npm install near-shell -g
```

If you do not have a NEAR account, please create one with [NEAR Wallet](https://wallet.nearprotocol.com).

In the project root, login with `near-shell` by following the instructions after this command:

```
near login
```

Modify the top of `src/config.js`, changing the `CONTRACT_NAME` to be the NEAR account that was just used to log in.

```javascript
…
const CONTRACT_NAME = 'YOUR_ACCOUNT_NAME_HERE'; /* TODO: fill this in! */
…

```

Start the example!

```
yarn start
```

## To Test

```
yarn asp // as-pect tests
yarn jest // integration tests
yarn test // both
```


## To Explore

See `assembly/main.ts` for the contract code and `src/main.js` for the JavaScript tests which define its usage.
