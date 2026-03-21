const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello Docker Project!");
  res.end();
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log("Server running");
});