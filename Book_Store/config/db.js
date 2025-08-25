const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/Book_Store_details");

const db = mongoose.connection

db.once("open",(err)=>{
    if(err){
        console.log( "MongoDB error", err);
        return
    }
    console.log("MogoDB connected succesfuly")
})