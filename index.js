const express = require('express')

express()
    .get('/', onhome)
    .get('/about', onabout)
    .listen(1900)

function onhome(req, res) {
    res.send('<h1>Hello World!</h1>\n')
}

function onabout(req, res) {
    res.send('<h1>About me</h1>\n')
}