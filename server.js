const express = require("express")
const path = require('path')
// invoking express
const app = express()
const PORT = process.env.PORT || 5000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))

 app.listen(PORT,function (){
  console.log(`Example app listening at https://localhost:${PORT}`)});
  
