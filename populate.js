/*
    Upload product.json file to mongoose collection
 */
require('dotenv').config()
const connectDB = require('./db/connect')
const { startSession } = require('./modules/product')
const Product = require('./modules/product')
const jsonProducts = require('./product.json')

const start = async() =>{
    try {
        await connectDB(process.env.MONGO_URI)

        // remove all products
        await Product.deleteMany()

        // pass array of products from product json
        await Product.create(jsonProducts)

        // end 
        process.exit(0)

    } catch (error) {
        console.log(error)
        proccess.exit(1)
    }
}
start()