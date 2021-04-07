const express = require('express');

const router = express.Router();
const bodyParser = require('body-parser');

const Nummers = require('../models/nummers');

router.use(bodyParser.urlencoded({ extended: true }));

router.use(bodyParser.json());

// Route aanvraag, die response index.ejs weergeeft
router.get('', (req, res) => {
     res.render('index');
});

// Route aanvraag, die response matching.ejs weergeeft
router.get('/matching', (req, res) => {
     res.render('matching');
});

// Route aanvraag, die response result.ejs weergeeft met Nummers schema
router.get('/result', (req, res) => {
     Nummers.find().then((result) => {
          res.render('result', { Nummers: result });
     });
});

// Route aanvraag, waarbij het id van nummer wordt gezocht en verwijdert uit db
router.get('/result/:id/delete', (req, res) => {
     Nummers.findByIdAndDelete(req.params.id).then(() => {
          res.redirect('/result');
     });
});

// Route aanvraag, waarbij data in het Nummers schema wordt opgeslagen door post
router.post('/index', (req, res) => {
     const nummer = new Nummers(req.body);
     nummer.save().then(() => {
          res.redirect('result');
     });
});

// Error 404 met gebruik van onbestaande route
router.use((req, res) => {
     res.status(404).send('Sorry, deze pagina bestaat niet');
});

// Exporteer router voor index.js
module.exports = router;
