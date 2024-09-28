const express = require("express");
const app = express();

const UserRouter = require("./router/user.router");

app.use(UserRouter);

// Create a local server to receive data from
app.get("/", (req, res) => {
  res.status(200).send({
    statusCode: 200,
    status: "OK",
    message: "Hello Word",
  });
});

app.get("/about", (req, res) => {
  res.status(200).send({
    statusCode: 200,
    status: "OK",
    message: "About",
  });
});

app.get("/*", (req, res) => {
  res.status(404).send({
    statusCode: 404,
    status: "Not Found",
    message: "Halaman tidak ditemukan",
  });
});

app.listen(8000, () => {
  console.log("Server running on url http://localhost:8000");
});
