const { User } = require("./../models");

module.exports = {
  get: async (req, res) => {
    const users = await User.findAll()
      .then((data) => data)
      .catch((err) => console.log(err));
    try {
      res.status(200).send({
        message: "Menampilkan data user",
        status: 200,
        data: users,
      });
    } catch (error) {
      console.log(error);
    }
  },
  post: async (req, res) => {},
  put: async (req, res) => {},
  delete: async (req, res) => {},
};
