#!/usr/bin/env node

/* 
At the moment, the option for the "-p" port does not work
It necessary to specify the port manuelly in the URL

Ex: node redir.js -r 127.0.0.1:3000/api/.....   
*/

const express = require('express');
const { program } = require('commander');
const app = express();
const port = 3000;

program 
    .description('Redirects all HTTP traffic locally')
    .option('-r, --destinationUrl <path>', 'the url that will be redirected')
    .option('-p, --port <port>', 'specify the port of the url');

program.parse();

const options = program.opts();
const destUrl = options.destinationUrl;
const destPort = options.port;

app.get("/", (req,res) => {
    res.redirect(302, `http://${destUrl}:${destPort}`);
});

app.listen(port, () => {
    console.log(`[+] Listening on port 80`);
    console.log(`[+] Redirected to localhost on port ${port}`);
});

app.listen(80);
