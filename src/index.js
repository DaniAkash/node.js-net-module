const net = require('net');

const server = net.createServer(client => {
  console.log("client connected");
  client.on("data", data => {
    console.log("data received:");
    console.log(data.toString());
  });
  client.on("end", () => {
    console.log("client disconnected");
  });
});

server.listen(8080, () => {
  console.log("Server started");
});