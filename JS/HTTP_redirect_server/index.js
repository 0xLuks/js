#!/usr/bin/env node

const express = require('express');
const app = express();
const port = 3000;
const host = "127.0.0.1:3000/"

app.get("/", (req,res) => {
	res.redirect(302, `http://${host}:${port}`);
});

app.listen(port, () => {
	console.log(`Listening on port 80`);
    app.listen(80);
});
