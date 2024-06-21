const express = require("express");
const app = express();

app.use(express.json());

let numOfReq = 0;

function calculateReq(req, res, next){
    numOfReq ++;
    console.log(numOfReq);
    next();
}

app.use(calculateReq);

app.get("/reqCal", calculateReq, (req, res) => {
    res.send("HI");
});

app.listen(8080);