const Note = require("../models/notes");


const controlGetAllNotes = async (req,res) => {
        const notes = await Note.find({});
        return res.send(notes);
}


const controlGetSpecificNote = async (req,res) => {
    const id = req.params.id;

    let note;
    try{
     note = await Note.find({_id: id});
    }
    catch(err){
        return res.status(404).send();       
    }
    return res.send(note[0]);
}


const controlSendNewNote = async (req,res) => {
    const { title, description, tag } = req.body;

    const note = await Note.create({title, description, tag});
    note.save;

    return res.send(note)
}


module.exports = {
    controlGetAllNotes,
    controlGetSpecificNote,
    controlSendNewNote,
}