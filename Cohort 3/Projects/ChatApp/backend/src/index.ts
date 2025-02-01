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
    // Here we convert the message to a JSON object
    // This is the message that was sent from the client
    // @ts-ignore
    const parsedMessage = JSON.parse(message);

    // If the message is a 'join' message
    if (parsedMessage.type === "join") {
      // Add the socket to the array of all sockets
      // and assign it to the room specified in the message
      allSockets.push({
        socket: socket,
        room: parsedMessage.payload.roomId,
      });
    }

    // If the message is a 'chat' message
    if (parsedMessage.type === "chat") {
      // Find the room that the current client is in
      // by finding the socket in the array of all sockets
      const currentClientRoom = allSockets.find(
        (x) => x.socket === socket
      )?.room;

      // Find all the sockets that are in the same room as the current client
      const socketsInCurrentRoom = allSockets.filter(
        (s) => s.room === currentClientRoom
      );

      // Send the message to all the sockets in the same room
      // as the current client
      socketsInCurrentRoom.forEach((s) =>
        s.socket.send(parsedMessage.payload.message)
      );
    }
  });

  socket.on("disconnect", () => {
    // remove the socket that disconnected from the array of all sockets
    // this is done by creating a new array that only includes the sockets
    // that are not equal to the socket that disconnected
    //@ts-ignore
    allSockets = allSockets.filter((s) => s !== socket);
    clientCount--;
    console.log(`client disconnected: ${clientCount}`);
  });
});
