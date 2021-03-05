const express = require('express');

const app = express();
const PORT = 3000;
const ejs = require('ejs');
const mongoose = require('mongoose');

const router = require('./routes/routes');
require('dotenv/config');

app.use(express.static('public'));

app.set('views', './views/pages');
app.set('view engine', 'ejs');

app.use(router);

mongoose.connect(
        process.env.DB_CONNECTION,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log('connected to db'),
        app.listen(PORT)
);
