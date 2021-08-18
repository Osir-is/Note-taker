const fs = require ('fs')
const express = express ('express')
const path = require('path')
// invoking express
const app = express()
const PORT = 3001;

app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));

app.get('/notes', (req,res) => res.sendFile(path.join(__dirname, 'public/notes.html')))

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
