const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('*', function(req, res){
    res.send('Error 404', 404);
  });

app.listen(PORT);