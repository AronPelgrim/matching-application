const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 3000;
const ejs = require('ejs');

const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'))

app.set('views', './views/pages')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
  res.render('index.ejs')
})

app.get('/matching', (req, res) => {
  res.render('matching.ejs')
})

app.post('/selection', urlencodedParser, (req, res) => {
  console.log(req.body)
  res.render('result')
})

app.use(function (req, res, next) {
  res.status(404).send("Sorry, deze pagina bestaat niet");
});

app.listen(PORT);