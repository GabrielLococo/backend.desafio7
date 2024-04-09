const ProductModel = require('../models/products.model.js')

class ProductsService{
    async newProduct(dataProduct) {
        try {
            const product = new ProductModel(dataProduct)
            return await product.save()
        } catch (error) {
            throw new Error('error al crear el producto')
        }
    }

    async getProduct() {
        try {
            return await ProductModel.find()
        } catch (error) {
            throw new Error('error al obtener los productos')
        }
    }
}

module.exports = ProductsService