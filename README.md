# 🤖 Bleep bloop, I'm a bot. Build your own Facebook Messenger bot.

Some of the code snippets were taken from Facebook's [official documentation](https://developers.facebook.com/docs/messenger-platform/quickstart). The docs are concise, but not exactly easy follow if you haven't built a bot and hooked it up to your app or page before. Your best bet in general might be their [Complete Guide] (https://developers.facebook.com/docs/messenger-platform/implementation) for the Messenger platform.

## What to expect

Following along with this tutorial will leave you with a live starter-app that implements a Facebook Messenger bot. Deployed to Heroku with a fun little landing page, persisting data, ready to rumble. Along the way, you will also learn how to use Heroku's free tier for hacking on projects like this.

## The basics

### Download, build and deploy the project

1. Get a free [Heroku account] (https://signup.heroku.com/) if you haven't already.

2. Install the [Heroku toolbelt] (https://toolbelt.heroku.com) which will let you launch, monitor and generally control your instances (and other services like databases) from the command line.

3. [Install Node]  (https://nodejs.org), this will be our server environment. Then open up Terminal (or whatever your CLI might be) and make sure you're running the latest version of npm, installed globally (the *-g* switch):

    ```
    sudo npm install npm -g
    ```

4. Clone this project and switch into the project directory.

    ```
    git clone https://github.com/Beavr/fb-chatbot-boilerplate.git
    cd fb-chatbot-boilerplate
    ```

5. Install Node dependencies. We are using [Express] (http://expressjs.com/) for serving stuff, the [Sequelize] (https://github.com/sequelize/sequelize) ORM for database-y stuff, [request] (https://github.com/request/request) and [request-promise] (https://github.com/request/request-promise) for sending and receiving messages, and [body-parser] (https://github.com/expressjs/body-parser) to process responses from Facebook's APIs.

    ```
    npm install
    ```

6. Create a new Heroku instance, deploy a [free database instance] (https://devcenter.heroku.com/articles/heroku-postgresql) for your server, and push the code to the cloud.  Database configuration happens automagically via Heroku's DATABASE_URL environment variable.

    ```
    heroku create
    heroku addons:create heroku-postgresql:hobby-dev
    git push heroku master
    ```  

7. You should be all set and be able to visit your page at the URL that was output by ```$ heroku create```. You can show the database settings your app is using with the command ```$ heroku config```. You can use the login data to inspect the database with your favourite client to see what's going on.
