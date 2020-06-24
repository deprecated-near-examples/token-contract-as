Token Contract in AssemblyScript - Gitpod version
=================================================

This project contains an implementation of a token contract similar to [ERC20](https://theethereum.wiki/w/index.php/ERC20_Token_Standard) but simpler. We'll visit a page, sign in and use your browser's console to run commands to initialize, send, and get the balance of a custom token.

This README is specific to Gitpod. For local development, please see [README.md](README.md).


Getting started
===============

Gitpod has taken care of installing all the necessary tools and dependencies. If you're viewing this file in Gitpod, at the bottom of the page you'll see a terminal which will display a link to follow:


    Server running at http://localhost:1234


A small dialog appears showing options similar to this:

![A Gitpod dialog box saying 'A service is available on port 1234' and giving options to 'Open Preview' or 'Open Browser'](assets/gitpod-port-1234.jpg)

The "Open Preview" option will open the site in a tab within the IDE. Note that Gitpod may need a little time to spin up the website. It's possible this step might require reloading after a brief pause.

The "Open Browser" option will open a new tab in your browser. Either option will work and is up to your preference.

Once you've opened the web app in your browser, follow the directions displayed on the web page by copy and pasting the commands into the browser console.

In many modern browsers you may find this by right-clicking anywhere on the page, selecting Inspect, and navigating to the **Console** tab.


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

Data collection
===============
By using Gitpod in this project, you agree to opt-in to basic, anonymous analytics. No personal information is transmitted. Instead, these usage statistics aid in discovering potential bugs and user flow information.
