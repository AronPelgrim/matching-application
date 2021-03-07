const express = require('express');

const router = express.Router();
const bodyParser = require('body-parser');

const Nummers = require('../models/nummers');

router.use(bodyParser.urlencoded({ extended: true }));

router.use(bodyParser.json());

router.get('', (req, res) => {
        res.render('index');
});

router.get('/matching', (req, res) => {
        res.render('matching');
});

router.get('/result', (req, res) => {
        Nummers.find().then((result) => {
                res.render('result', { Nummers: result });
        });
});

router.post('/index', (req, res) => {
        const nummer = new Nummers(req.body);
        nummer.save().then((result) => {
                res.redirect('result');
        });
});

router.use((req, res) => {
        res.status(404).send('Sorry, deze pagina bestaat niet');
});

module.exports = router;
