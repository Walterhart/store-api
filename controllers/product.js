const Product = require('../modules/product')

// test function
const getAllProductsStatic = async(req, res) =>{
    const products = await Product.find({price: {$gt:30} }).sort('name').limit(4)
    res.status(200).json({products, nbHits:products.length})
}


const getAllProducts = async(req, res) =>{
   
    const {featured, company, name, sort, select, numericFilter} = req.query
 
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

     // numeric field
     if(numericFilter){
        const operatorMap ={
            '>':  '$gt',
            '>=': '$gte',
            '=': 'eq',
            '<': 'lt',
            '<=': 'lte'
        }
    const regEx = /\b(<|>|>=|=|<|<=)\b/g;
    let filters = numericFilter.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );
    const options = ['price', 'rating'];
    filters = filters.split(',').forEach((item) => {
      const [field, operator, value] = item.split('-');
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
            }
        })
    }
    console.log(queryObject)
    
    // sort query if sort is a parameter
    if(sort){
      const sortList = sort.split(',').join(' ')
      result = result.sort(sortList)
      
    }
    else{
        result = result.sort('createAt')
    }
    
    // selected fields
    if(select){
        const selectList = select.split(',').join(' ')
        result = result.select(selectList)
    }
 
    // page logic
    const page = Number(req.query.page) || 1
    const limit = Number (req.query.limit) || 10
    const skip = (page -1 ) * limit
    result = result.skip(skip).limit(limit)
    
   
    const products = await result

    console.log(queryObject)
    res.status(200).json({products, nbHits:products.length})

}

module.exports = { getAllProductsStatic, getAllProducts}