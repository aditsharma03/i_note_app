const express = require("express");
const axios = require("axios");

const notesModel = require("../models/notes");
const { controlGetAll, controlGetSpecific, controlUpdateSpecific, controlRenderCreatePage, controlPostNewNote } = require("../controllers/static");

const router = express.Router();



router.get("/", controlGetAll)
router.get("/new", controlRenderCreatePage)
router.get("/:id", controlGetSpecific)

router.post("/", controlPostNewNote)

router.patch("/:id", controlUpdateSpecific )






module.exports = router;