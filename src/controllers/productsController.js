const ProductsService = require('../services/productsServices.js')
const productsService = new ProductsService()

class ProductsController {
    async newProduct(req, res) {
        try {
            const product = await productsService.newProduct(req.body)
            res.json(product)
        } catch (error) {
            res.status(500).json({error: 'error del servidor'})
        }
    }

    async getProduct(req, res) {
        try {
            const product = await productsService.getProduct()
            res.json(product)
        } catch (error) {
            res.status(500).json({error: 'error del servidor'})
        }
    }
}

module.exports = ProductsController