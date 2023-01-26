const getAllProductsStatic = async(req, res) =>{
    res.status(200).json({msg: 'products test'})
}


const getAllProducts = async(req, res) =>{
    res.status(200).json({msg: 'products'})
}

const getProduct = async(req, res) =>{

    res.status(200).json({msg: 'product'})
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