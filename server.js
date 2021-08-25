const express = require("express");
const path = require("path");
// invoking express
const { v4: uuidv4 } = require('uuid');
const fs = require("fs")
const app = express();
const PORT = process.env.PORT || 5000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.post("/api/notes", (req, res) => {
  const newNote = req.body;
  console.log("New Note generated:" + JSON.stringify(newNote));

  newNote.id = uuidv4();

  let noteData = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

  noteData.push(newNote);
  fs.writeFileSync("./db/db.json", JSON.stringify(noteData));

  res.json(newNote);
});
app.get("/api/notes", function (req, res) {
  console.log("Get note requests intiated");

  let noteData = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
  console.log("note data returned:" + JSON.stringify(noteData));
  res.json(noteData);
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.listen(PORT, function () {
  console.log(`Example app listening at https://localhost:${PORT}`);
});
