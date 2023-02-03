const Product = require('../modules/product')

// test function
const getAllProductsStatic = async(req, res) =>{
    const search ='ab'
    const products = await Product.find({ }).sort('name')
    res.status(200).json({products, nbHits:products.length})
}


const getAllProducts = async(req, res) =>{
   
    const {featured, company, name, sort, select} = req.query
 
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
    let result =  Product.find(queryObject)

    // sort query if sort is a parameter
    if(sort){
      const sortList = sort.split(',').join(' ')
      result = result.sort(sortList)
      
    }
    else{
        result = result.sort('createAt')
    }
    
    // show only selected fields
    if(select){
        const selectList = select.split(',').join(' ')
        result = result.select(selectList)
    }
    const products = await result

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