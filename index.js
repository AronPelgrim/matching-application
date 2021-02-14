const express = require('express');
const app = express();
const PORT = 3000;
const ejs = require('ejs');

app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
  res.render('index.ejs')
})

app.listen(PORT);