// routes/productRoutes.js
const express = require("express");
const router = express.Router();
const productController = require("./product.controller");

router.get("/:userId/products", productController.get); // Get all products for a specific user
router.post("/:userId/products", productController.post); // Create a new product for a specific user
router.put("/:userId/products/:productId", productController.put); // Update a product for a specific user
router.delete("/:userId/products/:productId", productController.delete); // Delete a product for a specific user

module.exports = router;
