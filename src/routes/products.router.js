const express = require("express");
const router = express.Router();
const ProductsController = require('../controllers/productsController.js')
const productsController = new ProductsController()


router.get('/', productsController.getProduct)
router.post('/', productsController.newProduct)
router.put('/:pid',productsController.updateProduct)
router.delete('/:pid',productsController.deleteProduct)

module.exports = router