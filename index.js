#!/usr/bin/env node

const config = require('./private/config');
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/projects/spotify-tracker/build/'));

app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));
app.get('/projects/spotify-tracker', (req, res) => res.sendFile(__dirname + '/projects/spotify-tracker/build/index.html'));

app.listen(config.port);
