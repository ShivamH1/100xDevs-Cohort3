const express = require("express");
const zod = require("zod");
const app = express();

app.use(express.json());

//zod
function validateInput(obj) {
  const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
  });

  const response = schema.safeParse(obj);
//   console.log(response);
}

// validateInput({
//   email: "shivam@gmail.com",
//   password: "shivam17",
// });

app.post("/login", (req, res) => {
//   const inputs = req.body;
//   const response = validateInput(inputs);
  const response = validateInput(req.body);
  if (!response.success) {
    res.json({
      msg: "Inputs are invalid",
    });
    return;
  }
});

// const schema = zod.array(zod.number());

// app.post("/health-checkup", (req, res) => {
//   const kidneys = req.body.kidneys;
//   const response = schema.safeParse(kidneys);
//   if (!response.success) {
//     res.status(411).json({
//       msg: "input is invalid",
//     });
//   } else {
//     res.send({
//       response,
//     });
//   }
// });

// //why you need input validator
// app.post("/health-checkup", (req, res) => {
//     const kidneys = req.body.kidneys;
//     const kidneyLength = kidneys.length;

//     res.send("you have "+ kidneyLength +"kidneys");
// });

// //global catches
// app.use((err, req, res, next) => {
//     res.status(500).json({
//         msg : "Something up with the server"
//     })
// });

// function userMiddleware(req, res, next){
//     if (username != "shivam" && password != "admin123"){
//         res.status(403).json({
//             msg : "Incorrect Input",
//         });
//     }else{
//         next();
//     }
// };

// function kidneyMiddleware(req, res, next){
//     if(kidneyId != 1 && kidneyId != 2){
//         res.status(403).json({
//             msg : "Incorrect Input",
//         });
//     }else{
//         next();
//     }
// };

// app.use(userMiddleware);
// app.use(kidneyMiddleware);

//usage of middleware
// app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kideneyId = req.query.kideneyId;
//     res.send("Your health seems fine!");
// });

// app.get("/kidney-check", userMiddleware, kidneyMiddleware, (req, res) => {
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kideneyId = req.query.kideneyId;
//     res.send("Your kidney looks fine!");
// });

// app.get("/heart-check", userMiddleware, (req, res) => {
//     const username = req.headers.username;
//     const password = req.headers.password;
//     res.send("Your heart looks healthy!");
// });

//Dumb way of writing
// app.get("/health-checkup", (req, res) => {
//   const username = req.headers.username;
//   const password = req.headers.password;
//   const kideneyId = req.query.kideneyId;

//   if (username === "shivam" && password === "admin123") {
//     if (kideneyId == 1 || kideneyId == 2) {
//       res.json({
//         msg: "Your kidney is fine!",
//       });
//     }else{
//         res.json({
//             msg : "Bad condition require checkup!",
//         })
//     }
//     res.status(400).json({"msg" : "Something up with your inputs"});
//   }
// });

app.listen(8080);
