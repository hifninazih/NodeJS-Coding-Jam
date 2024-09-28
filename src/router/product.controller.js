// controllers/productController.js
const { Product } = require("../models");

module.exports = {
  // Get all products for a specific user
  get: async (req, res) => {
    const { userId } = req.params; // Extract userId from URL path

    try {
      const products = await Product.findAll({
        where: { userId }, // Filter products by userId
        attributes: ["id", "name", "description"],
      });

      if (products.length === 0) {
        return res
          .status(404)
          .json({ message: "No products found for this user." });
      }

      res.status(200).json(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      res
        .status(500)
        .json({ error: "An error occurred while fetching products." });
    }
  },

  // Create a new product for a specific user
  post: async (req, res) => {
    const { userId } = req.params; // Extract userId from URL path
    const { name, description } = req.body;

    if (!name || !description) {
      return res
        .status(400)
        .json({ error: "Name and description are required." });
    }

    try {
      const newProduct = await Product.create({
        name,
        description,
        userId,
      });

      res.status(201).json(newProduct);
    } catch (error) {
      console.error("Error creating product:", error);
      res
        .status(500)
        .json({ error: "An error occurred while creating the product." });
    }
  },

  // Update an existing product for a specific user
  put: async (req, res) => {
    const { userId, productId } = req.params; // Extract userId and productId from URL path
    const { name, description } = req.body;

    try {
      // Find the product by both productId and userId
      const product = await Product.findOne({
        where: { id: productId, userId },
      });
      if (!product) {
        return res.status(404).json({
          error:
            "Product not found or you do not have permission to edit this product.",
        });
      }

      // Update product fields
      if (name) product.name = name;
      if (description) product.description = description;

      await product.save();

      res.status(200).json(product);
    } catch (error) {
      console.error("Error updating product:", error);
      res
        .status(500)
        .json({ error: "An error occurred while updating the product." });
    }
  },

  // Delete a product for a specific user
  delete: async (req, res) => {
    const { userId, productId } = req.params; // Extract userId and productId from URL path

    try {
      const product = await Product.findOne({
        where: { id: productId, userId },
      });
      if (!product) {
        return res.status(404).json({
          error:
            "Product not found or you do not have permission to delete this product.",
        });
      }

      await product.destroy();

      res.status(204).send(); // No content response
    } catch (error) {
      console.error("Error deleting product:", error);
      res
        .status(500)
        .json({ error: "An error occurred while deleting the product." });
    }
  },
};
