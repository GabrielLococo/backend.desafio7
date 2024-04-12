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

    async updateProduct(req, res) {
        try {
            const id = req.params.pid
            const updatedProduct = req.body
            const product = await productsService.updateProduct(id, updatedProduct)
            res.json(product)
        } catch (error) {
            res.status(500).json({error: 'error del servidor'})
        }
    }

    async deleteProduct(req, res) {
        const id = req.params.pid
        try {
            const product = await productsService.deleteProduct(id)
            res.json(product)
        } catch (error) {
            res.status(500).json({error: 'error del servidor'})
        }
    }
}

module.exports = ProductsController