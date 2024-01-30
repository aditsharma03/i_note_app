const express = require("express");
const Note = require("../models/notes");

const router = express.Router();


router.get("/", async (req,res)=>{
    
    const {title} = req.body;

    if( !title ){
        const notes = await Note.find({});
        return res.send(notes);
    }

    const note = await Note.find({title: title});
    return res.send(note);

})

router.post("/", async (req,res)=>{
    const { title, description, tag } = req.body;

    const note = await Note.create({title, description, tag});
    note.save;

    res.send(note)

});













module.exports = router;