"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let clientCount = 0;
let allSockets = [];
wss.on("connection", (socket) => {
    allSockets.push(socket);
    clientCount++;
    console.log(`client connected #: ${clientCount}`);
    socket.on("message", (message) => {
        console.log(`received message: ${message.toString()}`);
        allSockets.forEach((socket) => {
            socket.send(message.toString() + " sent from server");
        });
    });
});
