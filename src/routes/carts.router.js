const express = require("express");
const router = express.Router();
const CartController = require("../controllers/cartsController.js");
const cartController = new CartController();

router.post('/',cartController.newCart)
router.get("/:cid", cartController.getProductFromCart)
router.post("/:cid/product/:pid", cartController.addProductToCart)
router.delete('/:cid/product/:pid', cartController.deleteProductFromCart)

module.exports = router