const express = require("express");
const axios = require("axios");

const notesModel = require("../models/notes");
const { controlGetAll, controlGetSpecific, controlUpdateSpecific } = require("../controllers/static");

const router = express.Router();



router.get("/", controlGetAll)
router.get("/:id", controlGetSpecific)

router.patch("/:id", controlUpdateSpecific )






module.exports = router;