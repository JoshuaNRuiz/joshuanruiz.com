#!/usr/bin/env node

const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));
// app.get('/projects', (req, res) => res.sendFile(__dirname + '/routes/projects.html'));

const port = 8080;
const hostname = '167.99.14.95';
app.listen(port, () => console.log(`Server running at http://${hostname}:${port}/`));