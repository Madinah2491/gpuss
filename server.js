var express = require('express');
var bodyParser=require('body-parser');
var Port= process.env.Port|| 5000||8080;

var app= express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ type: 'application/*+json' }))

app.listen(Port);