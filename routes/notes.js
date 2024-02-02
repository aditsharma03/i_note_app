const express = require("express");


const { controlGetAllNotes, controlGetSpecificNote, controlSendNewNote, controlDeleteSpecific, controlUpdateSpecific } = require("../controllers/notes");

const router = express.Router();



router.get("/:id", controlGetSpecificNote );
router.get("/", controlGetAllNotes );



router.post("/", controlSendNewNote);



router.patch("/:id", controlUpdateSpecific);



router.delete("/:id", controlDeleteSpecific);





module.exports = router;