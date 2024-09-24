const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());

const users = [];

//stateful token - we need to store these tokens in a variable right now (and eventually in a database).

// function generateToken() {
//   let options = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//     "0",
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//   ];

//   let token = "";
//   for (let i = 0; i < 32; i++) {
//     // use a simple function here
//     token += options[Math.floor(Math.random() * options.length)];
//   }
//   return token;
// }

//problem - The problem is that we need to send a request to the database every time the user wants to hit an authenticated endpoint
//solution - JWT

//JWTs, or JSON Web Tokens, are a compact and self-contained way to represent information between two parties.
//They are commonly used for authentication and information exchange in web applications.
// JWTs are Stateless: JWTs contain all the information needed to authenticate a request, so the server doesn’t need to
// store session data. All the `data` is stored in the token itself.

const JWT_SECRET = "USER_APP";

app.get("/me", (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ error: 'No token provided' });
    }
  
    const token = authHeader; // Extract token from "Bearer <token>"
    
    try {
      const decodedInfo = jwt.verify(token, JWT_SECRET);
      const username = decodedInfo.username;
      const user = users.find(u => u.username === username);
      
      if (user) {
        res.json({
          username: user.username,
          password: user.password,
        });
      } else {
        res.status(403).json({
          msg: "Unauthorized access",
        });
      }
    } catch (error) {
      res.status(401).json({ error: 'Invalid token' });
    }
  });

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  users.push({ username, password });

  res.json({
    msg: "User created successfully",
  });
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    const token = jwt.sign(
      {
        username: user.username,
      },
      JWT_SECRET
    );
    // user.token = token;
    res.send({
      token,
    });
    console.log(users);
  } else {
    res.status(403).send({
      message: "Invalid username or password",
    });
  }
});

app.listen(3000);
