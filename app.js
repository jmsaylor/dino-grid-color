const express = require('express');
const path = require('path')

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'color.html'))
})

app.get('/test', (req, res) => {
    res.send({test: "hello"})
})

app.listen(port);
console.log('Server started at http://localhost:' + port);