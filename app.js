const express = require('express')
const  app = express()
const connectDB = require('./db/connect')
const products = require('./routes/product')
const errorhandler = require('./middleware/errorhandler')
const error404 = require('./middleware/error404')
const port = process.env.PORT || 3000

require('dotenv').config()

// parse json
app.use(express.json())

// root

app.get('/',(req, res) =>{
    res.send('<h1>Store API<h1><a href = "api/v1/products"> Product<a/>')
})

app.use('/api/v1/products', products)

// error 404 
app.use(error404)

app.use(errorhandler)

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

