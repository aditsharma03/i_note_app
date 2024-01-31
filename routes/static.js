const express = require("express");
const notesModel = require("../models/notes");

const router = express.Router();



router.get("/", async (req,res)=>{
    
    const allNotes = await notesModel.find({});
    
    res.render("home", {
        allNotes: allNotes
    });
})








module.exports = router;