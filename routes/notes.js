


const express = require("express");
const Note = require("../models/notes");


const { controlGetAllNotes, controlGetSpecificNote, controlSendNewNote } = require("../controllers/notes");

const router = express.Router();






router.get("/:id", controlGetSpecificNote );
router.get("/", controlGetAllNotes );



router.post("/", controlSendNewNote);







module.exports = router;