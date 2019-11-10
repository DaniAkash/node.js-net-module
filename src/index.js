const net = require("net");

// Following code will be excecuted when client is connected
const server = net.createServer(client => {
  /**
   * `client` object is an event emitter
   */

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
