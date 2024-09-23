import { createServer, IncomingMessage, ServerResponse } from "http";
// const { createServer } = require("node:http");

const hostname = "127.0.0.1";
const port = 3000;

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  if (req.url === "/") {
    res.statusCode = 200;
    res.end("Hello 1000 times World");
  } else if (req.url === "/hello") {
    res.statusCode = 200;
    res.end("Hello from the /hello endpoint!");
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
