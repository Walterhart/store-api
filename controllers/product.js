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

module.exports = { getAllProducts, getProduct, createProduct, updateProduct, deleteProduct}