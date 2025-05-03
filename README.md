# betterpings
Better pings for your discord server

## .env
What to have in your dot env file.

### TOKEN
The token value is the token for your discord bot this can be found at https://discord.com/developers/applications/ it can be found under the bot section (KEEP THIS VALUE A SECRET)

### CLIENTID
This value is your 'applicationID' it can be found at https://discord.com/developers/applications/ under the general section of your application

### GUILDID
This value is used to set which server is used as a 'development' server. This is handy if you want
to test new commands and don't want to deploy them globally. Your guild ID can be found by right clicking the icon of the discord server you want to make your 'development' server and clicking `copy server id`. (this only works if you have developer mode turned on).

## How to self host

1. Clone this code to your computer using GIT
2. With NPM installed on you device run the command `npm i` whilst in the project directory
3. Create a file in the root of the project called `.env` and fill it with the above values
4. Run the `npm start` command to start the server (this only works with nodemon)
    - If you don't have nodemon installed you can run the bot using the command `node src/betterpings.js`
        - You may need to run the command `npm run globaldeploy` to make the commands accessable
        in your server

## NPM commands
This project has 3 NPM commands!

### NPM START
Starts the server (provided you have followed the steps above)

### NPM RUN GLOBALDEPLOY
Deploys the discord bots commands globally to all servers it's in

### NPM RUN DEVDEPLOY
Deploys the discord bots commands to the development server you specify using the `GUILDID` value in your `.env` file

## Discord commands
Current discord bot commands

### /online
Pings all online users

### /idle
Pings all idle users

## Contributions
Feel free to submit changes and fork the repo! I'll try to merge any changes that fit with the core idea of the bot!
