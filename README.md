# Simple Twitter time line app

<p align="center">
<img src="https://github.com/KevinRupper/simple-twitter-feed/blob/master/resources/app.png" alt="React Styleguidist" width="400">
</p>

A react app to display your twitter time line.

### Server configuration

You will need first to have a Twitter application in your account in order to get the required API keys and tokens (CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN, ACCESS_TOKEN_SECRET) to allow the communications between the app and Twitter servers. Put them into .env file located in the server folder.

### How to run

Use  ``` node server ``` and ``` npm start run ``` to start the app.

### Launch tests

Use ```npm test ``` to run the tests.

### TODO

 - Add login feature to dynamically obtain ACCESS_TOKEN and ACCESS_TOKEN_SECRET.
 - Simplify app start with concurrently library.
 - Set up a library injection.
