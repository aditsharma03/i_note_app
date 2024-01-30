const path = require("path");
const express = require("express");
const mongoose = require("mongoose");


const notesRouter = require("./routes/notes");
const staticRouter = require("./routes/static");


const PORT = 8000;
const URI = "mongodb+srv://aditsharma03:imS1mple@mycluster.yucqiwo.mongodb.net/inoteapp?retryWrites=true&w=majority";
const app = express();
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
// app.use(express.urlencoded)




app.use("/", staticRouter );
app.use("/api/notes", notesRouter );









async function connectToMongodb() {
    try {
        await mongoose.connect(URI);
        console.log("MongoDb connected!!!");
    }
    catch (error) {
        console.log(error.message);
    }
}
connectToMongodb();

app.listen(PORT, ()=>console.log(`App is listening on port: ${PORT}`))