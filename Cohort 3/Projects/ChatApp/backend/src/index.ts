import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

let clientCount = 0;
let allSockets: WebSocket[] = [];

wss.on("connection", (socket) => {
  allSockets.push(socket);
  clientCount++;
  console.log(`client connected #: ${clientCount}`);

  socket.on("message", (message) => {
    console.log(`received message: ${message.toString()}`);
    //broadcasting message
    allSockets.forEach((socket) => {
      socket.send(message.toString() + " sent from server");
    });
  });
});
