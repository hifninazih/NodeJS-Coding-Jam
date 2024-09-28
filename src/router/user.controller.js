const { User, Product } = require("./../models");

module.exports = {
  get: async (req, res) => {
    try {
      const users = await User.findAll({
        include: {
          model: Product,
          as: "products", // Alias used in User model association
          attributes: ["name", "description"], // Specify fields to retrieve from Product
        },
        attributes: ["id", "firstName", "lastName"], // Specify fields to retrieve from User
      });

      // console.log("Fetched users:", users); // Log users before processing

      // Create an array to hold user data
      const userData = users.map((user) => ({
        id: user.id, // This will be the custom ID
        firstName: user.firstName,
        lastName: user.lastName,
        products: user.products.map((product) => ({
          name: product.name,
          description: product.description,
        })),
      }));

      // Send a single response with all user data
      res.status(200).send(userData);
    } catch (error) {
      // console.error("Error fetching users with products:", error);
      res
        .status(500)
        .send({ error: "An error occurred while fetching users." });
    }
  },
  post: async (req, res) => {
    try {
      // console.log("Request body:", req.body); // Tambahkan log untuk debugging
      const { id, firstName, lastName } = req.body;

      // Validasi untuk memastikan semua field yang dibutuhkan ada
      if (!id || !firstName || !lastName) {
        return res.status(400).json({ error: "All fields are required." });
      }

      // Buat pengguna baru
      const newUser = await User.create({
        id,
        firstName,
        lastName,
      });

      // Kembalikan pengguna yang baru dibuat
      res
        .status(201)
        .json({ message: "User created successfully", user: newUser });
    } catch (error) {
      console.error("Error creating user:", error);
      res
        .status(500)
        .json({ message: "An error occurred while creating the user." });
    }
  },

  put: async (req, res) => {
    // Implementation for updating a user
    const { id } = req.params;
    const { firstName, lastName } = req.body;
    try {
      const updatedUser = await User.update(
        { firstName, lastName },
        { where: { id } }
      );
      if (updatedUser) {
        res.status(200).json({ message: "User updated successfully" });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      console.error("Error updating user:", error);
      res
        .status(500)
        .json({ message: "An error occurred while updating the user." });
    }
  },
  delete: async (req, res) => {
    // Implementation for deleting a user
    const { id } = req.params;
    try {
      const deletedUser = await User.destroy({ where: { id } });
      if (deletedUser) {
        res.status(200).json({ message: "User deleted successfully" });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      res
        .status(500)
        .json({ message: "An error occurred while deleting the user." });
    }
  },
};
