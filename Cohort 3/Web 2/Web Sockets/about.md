## WebSockets - A Protocol for Real-Time Communication

### WebSockets enable the establishment of a persistent, full-duplex communication channel over a single TCP connection between the client (usually a web browser) and the server.

#### Key Features:

- **Persistent Connection**: Once established, the connection remains open until explicitly closed by either the client or server, unlike HTTP, which operates on a request-response model with non-persistent connections.
- **Full Duplex**: Both parties can send and receive data simultaneously, ensuring seamless two-way communication.
- **TCP-Based**: WebSockets utilize TCP, a connection-oriented protocol, to maintain the communication link.

### Why Use WebSockets Instead of HTTP?

- **Real-Time Communication**: HTTP is not ideal for applications (request response model) requiring real-time data exchange, such as live chat or streaming. WebSockets provide a continuous connection, allowing for immediate data updates.
- **Efficiency**: Unlike HTTP, where each request involves a new handshake, WebSockets maintain a single connection, reducing latency and overhead.
- **Server-Side Events**: WebSockets allow servers to push events to clients without requiring polling, which is inefficient.

### **Use Cases for WebSockets:**

- **Real-Time Applications**: Ideal for chat apps, live sports updates, and real-time gaming where instant data exchange is crucial.
- **Live Feeds**: Financial tickers, news feeds, and social media updates benefit from WebSockets' ability to push live data.
- **Interactive Services**: Enhance user interaction in collaborative editing tools, live customer support, and webinars.

#### Note: Polling and Long Polling in HTTP attempt to mimic WebSockets by fetching data at regular intervals. Long polling waits for data to be available before responding, but both methods are less efficient than WebSockets for real-time communication. Example - Leetcode.

### WebRTC vs WebSockets Explained:

- **WebRTC**: Primarily designed for peer-to-peer communication, enabling direct media streaming and data sharing between browsers with minimal latency.
- **WebSockets**: Facilitates bidirectional communication between a client and server, ideal for real-time applications like chat and notifications.

While both technologies support real-time communication, WebRTC is optimized for media transfer, whereas WebSockets excel in scenarios requiring server-client messaging.

#### Note - Type of wss - const wss: WebSocket.Server<typeof WebSocket, typeof IncomingMessage> & socket - socket: WebSocket

### Why is HTTP called a stateless protocol?

- **Stateless**: HTTP does not maintain any information about the communication session between requests. Each request is treated as an isolated transaction, without any knowledge of previous requests or client state. This design allows for scalability and flexibility, as servers don't need to keep track of client state.

## You can't store WebSocket connections in a database because:

- **Ephemeral Nature**: WebSocket connections are transient and live only for the duration of the session, whereas databases are designed for persistent storage.
- **Stateful Connections**: WebSockets maintain a continuous stateful connection, which is not suitable for the stateless nature of traditional databases.
- **Resource Management**: Storing WebSocket connections would require managing resources and states that are dynamic and volatile, unlike static data stored in databases.

### Scaling ws server : In practice, scaling WebSocket servers involves deploying multiple instances to handle increased traffic. Typically, a `WebSocket fleet` is set up to manage connections efficiently. A central layer is responsible for `orchestrating` the flow of messages across the fleet. WebSocket servers remain `stateless`, allowing for easy scaling and management.
- **Load Balancing**: If you have multiple WebSocket servers, you can distribute the load among them, ensuring efficient scaling.
- **Horizontal Scaling**: You can horizontally scale the WebSocket server, adding more instances to handle increased traffic.
- **Vertical Scaling**: For vertical scaling, you can increase the memory and CPU resources of a single WebSocket server, allowing it to handle more connections.

### Problems with socket.io - 
Despite the advantages of socket.io, such as providing constructs like rooms for a cleaner API, it poses challenges in supporting multiple platforms, including Android, iOS, and Rust.
- **Rooms**: Rooms are a way of grouping sockets together. It allows you to have multiple channels and to broadcast messages to a subset of connected clients.

- **Offline Messages**: When a user is offline and a message is sent to them, the message is stored in the server's memory with the user's ID as the key. When the user comes back online, the stored messages are delivered to the user. This is possible because the WebSocket connection is stateful and the server remembers the user's ID. The server can then use this ID to retrieve the stored messages from memory and send them to the user. This process is known as "message queuing" and is a common pattern used in real-time communication systems. 
- **Creating a WebSocket Server**: When a user is online, the WebSocket server is created. The server is responsible for establishing a connection with the client and handling the messages exchanged between the client and the server. The server also stores the user's ID and the messages that are sent to the user while they are offline. When the user comes back online, the stored messages are delivered to the user.
