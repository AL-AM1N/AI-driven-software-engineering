import {
  createServer,
  IncomingMessage,
  METHODS,
  ServerResponse,
} from "node:http";

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  res.end("hello");
});
6
server.listen(5000, () => {
  console.log("Server is running on the port 5000");
});
