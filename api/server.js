const express = require('express');
const path = require('path');
const randomId = require('random-id');
const app = express(),
    bodyParser = require("body-parser");
port = 3080;

// place holder for the data
const users = [];

app.use(bodyParser.json());
