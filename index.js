const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
const ejs = require('ejs');
const mongoose = require('mongoose');
require('dotenv/config');

const Nummers = require('./models/nummers');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));

app.set('views', './views/pages');
app.set('view engine', 'ejs');

app.get('', (req, res) => {
        res.render('index.ejs');
});

app.get('/matching', (req, res) => {
        res.render('matching.ejs');
});

app.get('/nieuwNummer', (req, res) => {
        const nummer = new Nummers({
                title: 'beethovenstuff',
                artist: 'frans bouwer',
        });
        nummer.save();
});

app.post('/selection', urlencodedParser, (req, res) => {
        console.log(req.body);
        res.render('result');
});

app.use((req, res) => {
        res.status(404).send('Sorry, deze pagina bestaat niet');
});

mongoose.connect(
        process.env.DB_CONNECTION,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log('connected to db'),
        app.listen(PORT)
);
