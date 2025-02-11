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

#### Note: Not related to websocket but what is the need of cleanup in useEffect or setTimeout?
In React, cleanup functions are necessary in `useEffect` to prevent memory leaks and ensure that side effects are properly managed. When using `setTimeout` or `setInterval`, it's important to clear these timers when the component unmounts or when the effect is re-run, to avoid executing code after a component is no longer in use.

Example of cleanup in `useEffect` with `setInterval`:

```jsx
import React, { useEffect, useState } from 'react';

function TimerComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs only once on mount

  return <div>Count: {count}</div>;
}

export default TimerComponent;
```

In this example, the cleanup function, `clearInterval(intervalId)`, ensures that the interval is cleared when the component unmounts, preventing the timer from continuing to execute in the background.

### Fan Out Architecture in websocket:
In a Fan Out Architecture, when a message is sent to the server, the server broadcasts the message to all the connected clients. This is useful when you want to send the same message to multiple clients, without having to send a separate message to each one. The server acts as a hub, and all the connected clients act as nodes. When a message is received from one of the nodes, the server sends the message to all the other nodes, effectively "fanning out" the message.

For example, in a chat application, when a user sends a message, the server can broadcast the message to all the other users in the same chat room, using the Fan Out Architecture. This way, all the users in the chat room receive the message, without having to send a separate message to each one.

### PubSub:
PubSub (Publish-Subscribe) is a messaging pattern in which senders of messages, called publishers, do not programatically send their messages to specific receivers, called subscribers. Instead, published messages are characterized into classes or topics without knowledge of which subscribers, if any, there may be. Similarly, subscribers express interest in one or more classes and only receive messages that are of interest, without knowledge of which publishers, if any, there are.

In the context of websockets, PubSub can be used to scale the websocket server. Instead of having a single websocket server that handles all the incoming connections and broadcasts messages to all the connected clients, you can have multiple websocket servers, each handling a subset of the connected clients. When a message is sent to the server, the server publishes the message to a message broker, which then broadcasts the message to all the connected clients, using the Fan Out Architecture. This way, the load on the websocket servers is distributed, and the system can scale more easily.

For example, in a chat application, you can have multiple websocket servers, each handling a subset of the chat rooms. When a message is sent to one of the websocket servers, the server publishes the message to a message broker, which then broadcasts the message to all the other websocket servers that are connected to the same chat room. This way, all the users in the chat room receive the message, without having to send a separate message to each one.

This architecture is useful when you want to scale the websocket server, and you want to ensure that all the connected clients receive the message, even if one of the websocket servers goes down.
