const express = require('express');
const app = express();
const PORT = 3000;
const ejs = require('ejs');

app.use(express.static('public'))

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
  res.render('index.ejs')
})

app.listen(PORT);