# 🤖 Bleep bloop, I'm a bot. Build your own Facebook Messenger bot.

Some of the code snippets were taken from Facebook's [official documentation](https://developers.facebook.com/docs/messenger-platform/quickstart). The docs are concise, but not exactly easy follow if you haven't built a bot and hooked it up to your app or page before.

## The basics

### *Download, build and deploy the project*

1. Get a free [Heroku account] (https://signup.heroku.com/) if you haven't already.

2. Install the [Heroku toolbelt] (https://toolbelt.heroku.com) which will let you launch, monitor and generally control your instances (and other services like databases) from the command line.

3. [Install Node]  (https://nodejs.org), this will be the server environment. Then open up Terminal (or whatever your CLI might be) and make sure you're running the latest version of npm:

    ```
    sudo npm install npm -g
    ```

4. Clone this project and switch into the project directory.

    ```
    git clone https://github.com/Beavr/fb-chatbot-boilerplate.git
    cd fb-chatbot-boilerplate
    ```

5. Install our Node dependencies. We are using Express for serving stuff, request and request-promsie for sending and receiving messages, and body-parser to process responses from Facebook's APIs.

    ```
    npm install
    ```

6. Create a new Heroku instance, deploy a free database instance for your server, and push the code to the cloud.  Database configuration happens automagically via Heroku's DATABASE_URL environment variable.

    ```
    heroku create
    heroku addons:create heroku-postgresql:hobby-dev
    git push heroku master
    ```  

You should be all set and be able to visit your page. 
