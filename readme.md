# wa bot api
A WhatsApp API client that connects through the WhatsApp Web browser app

It uses Puppeteer to run a real instance of Whatsapp Web to avoid getting blocked.

NOTE: I can't guarantee you will not be blocked by using this method, although it has worked for me. WhatsApp does not allow bots or unofficial clients on their platform, so this shouldn't be considered totally safe.

docker api for [this package](https://github.com/pedroslopez/whatsapp-web.js/).

using express.js for web server.

[![npm](https://img.shields.io/npm/v/whatsapp-web.js.svg)](https://www.npmjs.com/package/whatsapp-web.js) [![Depfu](https://badges.depfu.com/badges/4a65a0de96ece65fdf39e294e0c8dcba/overview.svg)](https://depfu.com/github/pedroslopez/whatsapp-web.js?project_id=9765) ![WhatsApp_Web 2.2224.8](https://img.shields.io/badge/WhatsApp_Web-2.2224.8-brightgreen.svg)

# requirement
- npm
# usage
Initiate dev: run `npm install`

run `npm start`

# production
install pm2: run `npm install pm2 --location=global`

run `pm2 start index.js`

or to specify port
run `PORT=3000 pm2 start index.js`

for scan QR run `pm2 logs`
another command please refer to this [docs](https://pm2.keymetrics.io/docs/usage/quick-start/)



# integrate with dialogflow
please fill the requirement parameter in `env.list` file, you can copy it from `env_example.list`

```
WEBHOOK= #webhook url for customizable 
PROJECT_ID= #dialog_flow project id from google console
PROJECT_KEY_FILE= #dialog_flow project key file directory
```


# try it on postman
click this link https://www.getpostman.com/collections/cd5ccc53e2f30f06b388