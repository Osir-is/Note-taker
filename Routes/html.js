const path = require("path")

// included app function to contain all get requests
app.get('/notes', function (req,res) { res.sendFile(path.join(__dirname, '/public/notes.html'))})
app.get('*',function  (req, res) { res.sendFile(path.join(__dirname, '/public/index.html'))});