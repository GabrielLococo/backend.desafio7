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

    async updateProduct(id, updatedProduct) {
        try {
            const updatingProduct = await ProductModel.findByIdAndUpdate(id, updatedProduct)
            if (!updatingProduct) {
                console.log('error: no se encuentra el producto')
                return null
            }
            console.log('producto actualizado con exito!')
            return updatingProduct

        } catch (error) {
            throw new Error("Error al actualizar el producto");
        }
    }

    async deleteProduct (id) {
        try {
            const deletedProduct = await ProductModel.findByIdAndDelete(id)
            if(!deletedProduct) {
                console.log('error: no se encontro el producto para ser borrado')
                return null
            }
            console.log('producto eliminado correctamente')
        } catch (error) {
            throw new Error('error al eliminar el producto')
        }
    }
}

module.exports = ProductsService