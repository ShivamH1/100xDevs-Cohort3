import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

let clientCount = 0;

wss.on("connection", (socket) => {
  clientCount++;
  console.log(`client connected #: ${clientCount}`);

  socket.on("message", (message) => {
    console.log(`received message: ${message.toString()}`);
    socket.send(message.toString() + "sent from server");
  });
});
