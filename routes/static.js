const express = require("express");
const axios = require("axios");

const notesModel = require("../models/notes");
const { controlGetAll, controlGetSpecific } = require("../controllers/static");

const router = express.Router();



router.get("/", controlGetAll)
router.get("/:id", controlGetSpecific)






module.exports = router;