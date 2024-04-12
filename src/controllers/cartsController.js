const CartsService = require('../services/cartsServices.js')
const cartsServices = new CartsService()
const ProductsService = require('../services/productsServices.js')
const productsService = new ProductsService()

class CartController {
    async newCart(req, res) {
        try {
            const newCart = await cartsServices.createCart()
            res.json(newCart);
        } catch (error) {
            res.status(500).send("Error")
        }
    }

    async getProductFromCart(req, res) {
        const carritoId = req.params.cid
        try {
            const products = await cartsServices.getProductFromCart(carritoId)
            if (!products) {
                return res.status(404).json({ error: "Carrito no encontrado" })
            }
            res.json(products)
        } catch (error) {
            res.status(500).send("Error")
        }
    }

    async addProductToCart(req, res) {
        const cartId = req.params.cid
        const productId = req.params.pid
        const quantity = req.body.quantity || 1
        try {
            await cart.addProductToCart(cartId, productId, quantity)
            const carritoID = (req.user.cart).toString()

            res.redirect(`/carts/${carritoID}`)
        } catch (error) {
            res.status(500).send("Error")
        }
    }

    async deleteProductFromCart(req, res) {
        const cartId = req.params.cid
        const productId = req.params.pid
        try {
            const updatedCart = await cartsServices.deleteProductFromCart(cartId, productId)
            res.json({
                status: 'success',
                message: 'Producto eliminado del carrito correctamente',
                updatedCart,
            })
        } catch (error) {
            res.status(500).send("Error")
        }
    }

    async updateCart(req, res) {
        const cartId = req.params.cid;
        const updatedProducts = req.body;
        try {
            const updatedCart = await cartRepository.updateCart(cartId, updatedProducts);
            res.json(updatedCart);
        } catch (error) {
            console.error('Error al actualizar el carrito', error);
            res.status(500).json({
                status: 'error',
                error: 'Error interno del servidor',
            });
        }
    };

}



module.exports = CartController
