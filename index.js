#!/usr/bin/env node

const config = require('./private/config');
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));

app.listen(config.port);