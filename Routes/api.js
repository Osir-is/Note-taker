app.get('/notes', function (req,res) { res.sendFile(path.join(__dirname, '/public/notes.html'))})
app.get('*',function  (req, res) { res.sendFile(path.join(__dirname, '/public/index.html'))});
// route for json file 
app.get("/api/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "db/db.json"));})
