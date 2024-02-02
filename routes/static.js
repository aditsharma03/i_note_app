const express = require("express");
const axios = require("axios");

const notesModel = require("../models/notes");
const { controlGetAll, controlGetSpecific, controlUpdateSpecific } = require("../controllers/static");

const router = express.Router();



router.get("/", controlGetAll)
router.get("/new/", (req,res)=>{
    res.render("create");
})
router.get("/:id", controlGetSpecific)


router.post("/", async (req,res)=>{
    const {title,description} = req.body;

    await axios.post("http://localhost:8000/api/notes", {
        title: title,
        description: description
    })
    .then(response=>console.log(response))
    .catch(err=>console.log(err));

    res.redirect("http://localhost:8000/");
})

router.patch("/:id", controlUpdateSpecific )






module.exports = router;