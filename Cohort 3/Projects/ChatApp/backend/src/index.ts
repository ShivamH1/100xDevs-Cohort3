import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

interface User {
  socket: WebSocket;
  room: string;
}

let clientCount = 0;
let allSockets: User[] = [];

wss.on("connection", (socket) => {
  socket.on("message", (message) => {
    //Here we converted the message/string to object. Message is from the client.
    const parsedMessage = JSON.parse(message);

    if (parsedMessage.type === "join") {
      allSockets.push({
        socket: socket,
        room: parsedMessage.payload.roomId,
      });
    }

    if (parsedMessage.type === "chat") {
      const currentClientRoom = allSockets.find(
        (x) => x.socket === socket
      )?.room;

      const socketsInCurrentRoom = allSockets.filter(
        (s) => s.room === currentClientRoom
      );
      socketsInCurrentRoom.forEach((s) =>
        s.socket.send(parsedMessage.payload.message)
      );
    }
  });

  socket.on("disconnect", () => {
    // remove the socket that disconnected from the array of all sockets
    // this is done by creating a new array that only includes the sockets
    // that are not equal to the socket that disconnected
    allSockets = allSockets.filter((s) => s !== socket);
    clientCount--;
    console.log(`client disconnected: ${clientCount}`);
  });
});
