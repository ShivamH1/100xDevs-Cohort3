"use strict";
// We import the WebSocketServer class from the "ws" library, which is a
// WebSocket implementation for Node.js.
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
// code using http library
// import http from 'http';
// const server = http.createServer(function(request: any, response: any) {
//     console.log((new Date()) + ' Received request for ' + request.url);
//     response.end("hi there");
// });
// const wss = new WebSocketServer({ server });
// code using express
// import express from 'express'
// const app = express()
// const httpServer = app.listen(8080)
// const wss = new WebSocketServer({ server: httpServer });
// code using without any http server
// We create a new WebSocket server on port 8080. This means that any client
// (like a web page) can connect to our server on this port and start a
// WebSocket connection.
const wss = new ws_1.WebSocketServer({ port: 8080 });
// We set up an event handler for the "connection" event, which is fired when
// a new client connects to our server.
// wss.on("connection", (socket) => {
//   //send a message to the client
//   socket.send("Welcome to the WebSocket server!");
//   console.log("Client connected");
//   // We also set up an interval to send a message to the client every second.
//   // The message is a string that contains a random number, which we pretend is
//   // the current price of Ethereum (ETH).
//   setInterval(() => {
//     socket.send(`Current price of ETH: ${Math.random().toString()}`);
//   }, 1000);
//   // Finally, we set up an event handler for the "message" event, which is fired
//   // when the client sends a message to our server.
//   // Note that the message is a Buffer, so we need to call toString() on it to convert it to a string.
//   socket.on("message", (e) => {
//     console.log(`Received message: ${e.toString()}`);
//   });
// });
//ping pong game
wss.on("connection", (socket) => {
    console.log("Client connected");
    socket.on("message", (e) => {
        if (e.toString() === 'ping') {
            socket.send('pong');
        }
    });
});
