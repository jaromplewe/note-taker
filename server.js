var express = require('express');
var path = require('path');

var app = express();
var port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "notes.html"));
})
