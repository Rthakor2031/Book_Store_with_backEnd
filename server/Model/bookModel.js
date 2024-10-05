const mongoose = require('mongoose')

// BookSchema 
const BookSchema = new mongoose.Schema({
    title:{type:String ,required:true},
    author:{type:String ,required:true },
    price:{type:String , required:true},
    description:{type:String ,required:true },
    isbn:{type:String ,  required:true}
})

// bookk model 
const Bookmodel = mongoose.model("Book" , BookSchema)

module.exports=Bookmodel