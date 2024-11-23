const crypto = require("crypto");

const input = "100xDevs";
const hash = crypto.createHash("sha256").update(input).digest("hex");

console.log(`Hash: ${hash}`);
