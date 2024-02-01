const express = require("express");
const axios = require("axios");

const notesModel = require("../models/notes");

const router = express.Router();



router.get("/", async (req,res)=>{

    // const allNotes = await notesModel.find({});
    let allNotes;
    await axios.get("http://localhost:8000/api/notes/")
    .then( res => {
        allNotes = res.data;
    })
    .catch( err => console.log(err));
    
    res.render("home", {
        allNotes: allNotes
    });
})

router.get("/:id", async (req,res)=>{

    const id = req.params.id;
    // const note = await notesModel.find({"_id": id});
    
    if( id === "favicon.ico" ) return res.status(404);


    let note;
    await axios.get(`http://localhost:8000/api/notes/${id}`)
        .then( res=> note=res.data)
        .catch( err=> console.log(err));
         
    if( !note ){
        return res.render("notFound");
    }
    
    return res.render("note", {
        note: note
    });
})








module.exports = router;