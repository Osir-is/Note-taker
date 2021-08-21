const express = require ('express')
const fs = require ('fs')
const path = require('path')
// invoking express
const app = express()
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

app.get('/', (req, res) => { res.sendFile(path.join(__dirname, 'public/index.html'))});

app.get('/notes', (req,res) =>{ res.sendFile(path.join(__dirname, 'public/notes.html'))})
// route for json file 
pp.get("/api/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "db/db.json"));})


 app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`))
  
