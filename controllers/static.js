const axios = require('axios');

const controlGetAll = async (req,res)=>{
    
    let allNotes;
    await axios.get("http://localhost:8000/api/notes/")
    .then( res => allNotes = res.data )
    .catch( err => console.log(err));
    
    return res.render("home", {
        allNotes: allNotes
    });

}

const controlGetSpecific = async (req,res)=>{

    const id = req.params.id;
    if( id == "favicon.ico" ) return res.send();

    let note;
    await axios.get(`http://localhost:8000/api/notes/${id}`)
        .then( res=> {
            if( res.status == 404 ) return res.render("notFound");
            note=res.data})
        .catch( err => console.log("Not found") );
         
    if( !note ){
        return res.render("notFound");
    }
    
    return res.render("edit", {
        note: note
    });
}




module.exports = {
    controlGetAll,
    controlGetSpecific,
    
}