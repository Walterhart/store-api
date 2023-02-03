const Product = require('../modules/product')

// test function
const getAllProductsStatic = async(req, res) =>{
    //throw new Error('testing async error')
    const search ='ab'
    const products = await Product.find({
        name: {$regex:search, $options: 'i'},
    })
    res.status(200).json({products, nbHits:products.length})
}


const getAllProducts = async(req, res) =>{
   
    const {featured, company, name} = req.query
 
    const queryObject = {}
    if (featured)
    {
        queryObject.featured = featured === 'true'? true:false
    }
    if (company)
    {
        queryObject.company = company 
    }
    
    // look for name with patterns
    if (name)
    {
        queryObject.name = {$regex:name, $options: 'i'}
    }
    const products = await Product.find(queryObject)
    console.log(queryObject)
    res.status(200).json({products, nbHits:products.length})

}

const getProduct = async(req, res) =>{
    res.status(200).json({msg: ' a product'})
}


const createProduct= async(req, res) =>{
    
    res.status(200).json({msg: 'add product'})
}

const updateProduct= async(req, res) =>{
    
    res.status(200).json({msg: 'update product'})
}

const deleteProduct= async(req, res) =>{
    
    res.status(200).json({msg: 'delete product'})
}

module.exports = { getAllProductsStatic, getAllProducts, getProduct, createProduct, updateProduct, deleteProduct}