const {Schema, model} = require("mongoose");


const notesSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        default: "General",
    },    

});


const notesModel = model("notes", notesSchema);
module.exports = notesModel;