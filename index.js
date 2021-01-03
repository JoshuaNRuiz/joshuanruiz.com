#!/usr/bin/env node

const config = require('./private/config');
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
//app.use(express.static(__dirname + '/projects/atomize/client/build/'));

app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));
//app.get('/projects/atomize', (req, res) => res.sendFile(__dirname + '/projects/atomize/client/build/index.html'));

app.listen(config.port);
