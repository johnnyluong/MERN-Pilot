const usersRoute = require('./routes/users');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const uri = require('./config.js').ATLAS_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true, //avoid deprecation
});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Successfully connected to MongoDB');
});

// Init express
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

// Create your route handlers
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/users', usersRoute);

// Listen on a port
app.listen(3000);
