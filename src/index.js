const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());

const UserRouter = require("./router/user.router");
app.use(UserRouter);

app.use(bodyParser.urlencoded({ extended: true }));

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
