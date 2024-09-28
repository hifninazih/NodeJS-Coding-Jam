const http = require("node:http");

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  const {
    url,
    method,
    headers: { host },
  } = req;

  switch (url) {
    case "/":
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Hello Word",
        })
      );
      break;
    case "/about":
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          message: "About",
        })
      );
      break;
    default:
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Not Found",
        })
      );
      break;
  }

  console.log({ url, method, host });
});

server.listen(8000, () => {
  console.log("Server listening on port 8000");
});
