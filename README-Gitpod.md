Token Contract in AssemblyScript - Gitpod version
=================================================

This is a stripped-down example where we'll demonstrate creating a token. We'll visit a page, sign in and use your browser's console to run a commands to initialize, send, and get the balance of a custom token.

This README is specific to Gitpod and this example. For local development, please see [README.md](README.md).

## Description

This project contains implementation of token contract similar to [ERC20](https://theethereum.wiki/w/index.php/ERC20_Token_Standard).

## Getting started

Gitpod has taken care of installing all the necessary tools and dependencies. At the bottom of Gitpod is a terminal which will display a link to follow:
```bash
Server running at http://localhost:1234
```

A small dialog may appear showing options similar to this:

![Gitpod dialog that appears when website is served](assets/gitpod-port-1234.jpg)

The "Preview" option will open the site in a tab within the IDE. Note that Gitpod may need a little time to spin up the website. It's possible this step might require reloading after a brief pause.

Once you've opened the tab in your browser, follow the directions displayed on the web page by copy and pasting the commands into the browser console.

In many modern browsers you may find this by right clicking anywhere on the page, right-click, **Inspect**, and then navigate to the **Console** tab.

## To Test

```
yarn asp // as-pect tests
yarn jest // integration tests
yarn test // both
```

## To Explore

See `assembly/main.ts` for the contract code and `src/main.js` for the JavaScript tests which define its usage.
