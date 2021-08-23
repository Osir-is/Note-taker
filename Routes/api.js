const { response } = require("express");
const fs = require("fs");


const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
       console.log("Get note requests intiated")

       let noteData = JSON.parse(fs.readFileSync("./db/db.json","utf8"))
       console.log("note data returned:" + JSON.stringify(noteData))
       response.json(noteData)

});

app.post("/api/notes", (req,res) => {

const newNote = request.body;
console.log("New Note generated:" + JSON.stringify(newNote));

newNote.id = uuidv4();

let noteData = JSON.parse(fs.readFileSync("./db/db.json","utf8"))

DataCue.push(newNote);
fs.writeFileSync('./db/db.json', JSON.stringify(noteData));

response.json(newNote)


})




// route for json file 
// app.get("/api/notes", function(req, res) {
 // res.sendFile(path.join(__dirname, "db/db.json"));}
