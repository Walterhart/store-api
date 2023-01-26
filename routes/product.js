const express = require('express')
const router = express.Router()
const { getAllProductsStatic, getAllProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/product')

router.route('/').get(getAllProducts).post(createProduct)
router.route('/:id').get(getProduct).patch(updateProduct).delete(deleteProduct)
router.route('/static').get(getAllProductsStatic)

module.exports = router