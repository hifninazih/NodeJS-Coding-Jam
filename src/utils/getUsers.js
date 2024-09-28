const { User, Product } = require("../models"); // Import the models

async function getUsersWithProducts() {
  try {
    const users = await User.findAll({
      include: {
        model: Product,
        as: "products", // Alias used in User model association
        attributes: ["name", "description"], // Specify fields to retrieve from Product
      },
      attributes: ["id", "firstName", "lastName"], // Specify fields to retrieve from User
    });

    users.forEach((user) => {
      return {
        id: user.id, // This will be the custom ID
        firstName: user.firstName,
        lastName: user.lastName,
        products: user.products.map((product) => ({
          name: product.name,
          description: product.description,
        })),
      };
    });
  } catch (error) {
    console.error("Error fetching users with products:", error);
  }
}

getUsersWithProducts();
