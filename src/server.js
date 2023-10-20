// Initialization
const express = require("express");
const app = express();

const mongoose = require("mongoose");
const Note = require('./models/Note');

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false}));
// if extended true -> we can send nested object
// if extended false -> we cannot send nested object
app.use(bodyParser.json());

await mongoose.connect("mongodb+srv://chandan:Chandan%4031@cluster0.8ntkxd2.mongodb.net/notesdb").then(function(){

    app.get("/", function(req, res){
        const response = {message : "API Works Successfully"};
        res.json(response);
    });

    const noteRouter = require("./routes/Note");
    app.use("/notes", noteRouter);

});




// Starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, function(){
    console.log("Server Started at PORT:" + PORT );
});