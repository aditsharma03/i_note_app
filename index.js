require('dotenv').config();
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");


const notesRouter = require("./routes/notes");
const staticRouter = require("./routes/static");


const PORT = process.env.PORT;
const URI = process.env.DATABASE_URI;

const app = express();
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(methodOverride("_method"));




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