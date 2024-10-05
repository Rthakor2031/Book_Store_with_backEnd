const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const BookRouter = require('./Routes/Bookroutes')
const conectWithDB = require('./db')
const cors = require('cors');
app.use(cors());
app.use(express.json())

app.use("/book",BookRouter)











app.listen(process.env.PORT || 3005 , async() => {
    try {
        await conectWithDB
        console.log("connected with db")
    } catch (error) {
        console.log(error)
    }
})

