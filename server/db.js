const mongoose = require('mongoose')

const conectWithDB =  mongoose.connect("mongodb://127.0.0.1:27017/Bookstore")

module.exports=conectWithDB