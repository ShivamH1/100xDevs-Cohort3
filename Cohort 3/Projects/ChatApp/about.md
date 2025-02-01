### (Websocket doesn't broadcast message rather establish one-to-one connection)
When a client, such as Postman, communicates with the WebSocket server, the message is received by the server and a response is sent directly back to that client, establishing a **one-to-one** interaction. Other clients, like Hopscotch, connected to the same WebSocket server, will not receive this message or the response. To achieve **broadcasting** to all connected clients, the server must individually send the message to each client, resulting in multiple **one-to-one** interactions, rather than a single **one-to-many** broadcast.
### Now the question how can i broadcast it?
To broadcast a message to all connected clients, the server needs to keep track of connected clients and iterate over them, sending the message to each client individually.

#### Websocket does not support json objects. So the string is send from client to server, now server needs to convert it to json/object. In websocket we can only communicate through string and binary. And at server side JSON.parse(string) to convert it to object/JSON. (JSON.stringify(object) to convert it to string (no need))

```
import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

interface User {
  socket: WebSocket;
  room : string;
}

let clientCount = 0;
let allSockets: User[] = [];

wss.on("connection", (socket) => {

  socket.on("message", (message) => {
     const parsedMessage = JSON.parse(message);
     // now add checks like - 
     if (parsedMessage.type === 'JoinRoom') {} 
     else if (parsedMessage.type === 'Chat'){} etc...
  });

  socket.on("disconnect", () => {
    // remove the socket that disconnected from the array of all sockets
    // this is done by creating a new array that only includes the sockets
    // that are not equal to the socket that disconnected
    allSockets = allSockets.filter((s) => s!== socket);
    clientCount--;
    console.log(`client disconnected: ${clientCount}`);
  })
});
```