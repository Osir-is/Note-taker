const fs = require("fs");


const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

// route for json file 
app.get("/api/notes", function(req, res) u9ij{
  res.sendFile(path.join(__dirname, "db/db.json"));})
 