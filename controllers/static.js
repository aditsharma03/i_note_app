const axios = require('axios');

const controlGetAll = async (req,res)=>{
    
    let allNotes;
    await axios.get(`${process.env.ADDRESS}/api/notes/`)
    .then( res => allNotes = res.data )
    .catch( err => console.log(err));
    
    return res.render("home", {
        allNotes: allNotes
    });

}

const controlGetSpecific = async (req,res)=>{

    const id = req.params.id;
    if( id.length !== 24  ) return res.send();

    let note;
    await axios.get(`${process.env.ADDRESS}/api/notes/${id}`)
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


const controlUpdateSpecific = async (req,res)=>{

    const id= req.params.id;
    
    const {title, description} = req.body;

    let note;
    await axios.patch(`${process.env.ADDRESS}/api/notes/${id}`, {
        title: title,
        description: description
    })
        .then( response=> {
            note = response.data;
        }) 
        .catch( err => console.log('error while updating!!'));
    

    res.redirect(`/`);

}


const controlRenderCreatePage = (req,res)=>{
    return res.render("create");
}

const controlPostNewNote = async (req,res)=>{
    const {title,description} = req.body;

    await axios.post(`${process.env.ADDRESS}/api/notes`, {
        title: title,
        description: description
    })
    .then(response=>console.log(response))
    .catch(err=>console.log(err));

    res.redirect(`/`);
}



module.exports = {
    controlGetAll,
    controlGetSpecific,
    controlUpdateSpecific,
    controlRenderCreatePage,
    controlPostNewNote,
}