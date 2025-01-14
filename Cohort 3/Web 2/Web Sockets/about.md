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
