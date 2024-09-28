const { User } = require("./../models/index");

module.exports = {
  get: async (req, res) => {
    try {
      const user = await User.findAll().then((data) => {
        console.log(data);
      });
      res.status(200).send({
        message: "Get User",
        data: user,
      });
    } catch (error) {
      console.log(error);
    }
  },
  post: async (req, res) => {},
  put: async (req, res) => {},
  delete: async (req, res) => {},
};
