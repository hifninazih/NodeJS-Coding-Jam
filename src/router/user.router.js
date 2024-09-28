const UserRouter = require("express").Router();
const UserController = require("./user.controller");

UserRouter.get("/user", UserController.get);
UserRouter.post("/user", UserController.post);
UserRouter.put("/user/:id", UserController.put);
UserRouter.delete("/user/:id", UserController.delete);

module.exports = UserRouter;
