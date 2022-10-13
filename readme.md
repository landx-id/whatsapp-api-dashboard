# WhatsApp Bot API
A WhatsApp API client that connects through the WhatsApp Web browser app

It uses Puppeteer to run a real instance of Whatsapp Web to avoid getting blocked.

NOTE: I can't guarantee you will not be blocked by using this method, although it has worked for me. WhatsApp does not allow bots or unofficial clients on their platform, so this shouldn't be considered totally safe.

This project i using `ExpressJS` as Web Service.

## Usage

Install packages

```bash
~$ npm install
```

Run
```bash
~$ npm start
```

## Deploy on Production

It's recommeded to run in using `pm2` on production environment.

Install `pm2`

```
~$ npm install -g pm2
```

Run using `pm2`

```bash
~$ pm2 start index.js
```

You can run it on specifhic port

```bas
~$ PORT=3000 pm2 start index.js
```

To show QR Code, show the log using

```bash
~$ pm2 logs
```

Reference: https://pm2.keymetrics.io/docs/usage/quick-start

## Integration with Google DialogFlow

You can integrate this project with Google DialogFlow. Copy `.env.example` to `.env` and fill env file with approriate values

```properties
WEBHOOK=WebHook URL for customizable 
PROJECT_ID=DialogFlow Project ID from Google Console
PROJECT_KEY_FILE=Dialog Flow Project Key
```


## Try API using Postman

Postman collection for this project is on https://www.getpostman.com/collections/cd5ccc53e2f30f06b388