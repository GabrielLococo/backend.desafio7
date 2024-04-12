const CartModel = require('../models/carts.model.js')

class CartsService {
    async createCart(){
        try {
            const newCart = new CartModel({ products: [] })
            await newCart.save()
            return newCart
        } catch (error) {
            console.log('error: error al crear nuevo carro de compras.')
        }
    }

    async addProductToCart(cartId, productId, quantity = 1){
        try {
            const cart = await this.getCartById(cartId)

            const existProduct = cart.products.find(item => item.product.toString() === productId)

            if(existProduct) {
                existProduct.quantity += quantity
            } else {
                cart.products.push({product: productId, quantity})
            }

            cart.markModified('products')

            await cart.save()
            return cart

        } catch (error) {
            console.log('error: no se pudo agregar un producto',error)
        }
    }
    
    async getProductFromCart(idCarrito) {
        try {
            const carrito = await CartModel.findById(idCarrito)
            if (!carrito) {
                console.log("No existe ese carrito con el id")
                return null
            }
            return carrito
        } catch (error) {
            throw new Error("Error")
        }
    }

    async deleteProductFromCart(cartId, productId) {
        try {
            const cart = await CartModel.findById(cartId)

            if (!cart) {
                throw new Error('Carrito no encontrado')
            }

            cart.products = cart.products.filter(item => item.product._id.toString() !== productId)

            await cart.save()
            return cart
        } catch (error) {
            console.error('Error al eliminar el producto del carrito ', error)
            throw error
        }
    }

    async updateCart(cartId, updatedProducts) {
        try {
            const cart = await CartModel.findById(cartId);

            if (!cart) {
                console.log('Carrito no encontrado');
            }

            cart.products = updatedProducts;

            cart.markModified('products');

            await cart.save();

            return cart;
        } catch (error) {
            console.error('Error al actualizar el carrito', error);
            throw error;
        }
    }

}

module.exports = CartsService