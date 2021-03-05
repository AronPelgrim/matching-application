const express = require('express');

const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');

const Nummers = require('../models/nummers');

router.use(bodyParser.urlencoded({ extended: true }));

router.use(bodyParser.json());

router.get('', (req, res) => {
        res.render('index.ejs');
});

router.get('/matching', (req, res) => {
        res.render('matching.ejs');
});

router.post('/index', (req, res) => {
        const nummer = new Nummers(req.body);
        nummer.save().then((result) => {
                res.redirect('/');
        });
});

router.get('/alleNummers', (req, res) => {
        Nummers.find()
                .then((result) => {
                        res.send(result);
                })
                .catch((err) => {
                        console.log(err);
                });
});

router.use((req, res) => {
        res.status(404).send('Sorry, deze pagina bestaat niet');
});

module.exports = router;
