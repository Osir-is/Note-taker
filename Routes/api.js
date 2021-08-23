
// route for json file 
app.get("/api/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "db/db.json"));})
