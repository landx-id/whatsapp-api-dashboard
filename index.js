const qrcode = require('qrcode-terminal');
const { Client, Location, List, Buttons, LocalAuth } = require('whatsapp-web.js');
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

const client = new Client({
    authStrategy: new LocalAuth({ clientId: "client-one" }),
    puppeteer: { headless: false }
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 5100;

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();

app.listen(port, () => {           
    console.log(`Now listening on port ${port}`); 
});

client.on('authenticated', () => {
    console.log('AUTHENTICATED');
});

client.on('message', message => {
	if(message.body === '!ping') {
		client.sendMessage(message.from, 'pong');
	}
});

app.post('/send', multer().any(), function (request, response, next){
    number = request.body.number.includes('@c.us') ? request.body.number : `${request.body.number}@c.us`;
    client.sendMessage(number, request.body.message);
    response.sendStatus(200);
});