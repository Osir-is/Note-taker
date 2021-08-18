const fs = require ('fs')
const express = express ('express')
const path = require('path')
// invoking express
const app = express()
const PORT = 3001;

app.use(express.static('public'))

