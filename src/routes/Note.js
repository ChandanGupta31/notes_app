const express = require("express");
const router = express.Router();

const Note = require("./../models/Note");

app.get("/list",async function(req, res){
    var notes = await Note.find({
        userid : req.body.userid
    });
    res.json(notes);
});



app.post("/add",async function(req, res){

    await Note.deleteOne({id : req.body.id});

    const newNote = new Note({
        id : req.body.id,
        userid : req.body.userid,
        title : req.body.title,
        content : req.body.content,
    });

    await newNote.save();

    const response = {message : "New note created " + `id : ${req.body.id}`};

    res.json(response);
});



router.post("/delete", async function(req, res){
    await Note.deleteOne({id : req.body.id});
    const response = {message : "Note deleted " + `id = ${req.body.id}`};
    res.json(response);
});

module.exports = router;