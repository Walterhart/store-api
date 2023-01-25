const express = require('express')
const  app = express()
const connectDB = require('./db/connect')

const error404 = require('./middleware/error404')
const port = process.env.PORT || 3000

require('dotenv').config()

// error 404 
app.use(error404)

// spin up server
const start = async() =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`connected to ${port}`))
        
    } catch (error) {
        console.log(error)
    }
}
start()

