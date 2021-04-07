const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const ejs = require('ejs');
const mongoose = require('mongoose');

const router = require('./routes/routes');
require('dotenv/config');

//Gebruik van static files map public
app.use(express.static('public'));

//Laat de juiste view route zien
app.set('views', './views/pages');
//Gebruik van EJS
app.set('view engine', 'ejs');

//Gebruik router van router.js bestand
app.use(router);

//Database connectie
mongoose.connect(
        process.env.DB_CONNECTION,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log('connected to db'),
        app.listen(PORT) 
);