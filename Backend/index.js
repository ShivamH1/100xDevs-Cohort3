const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;

app.use(bodyParser.json());

app.get("/", (req, res) => {
    console.log(req.headers);
    res.send("<b>Hello World<b>");
});

app.post("/con", (req, res) => {
    const msg = req.body.msg;
    console.log(msg);

    res.json({
        output : "2 + 2 : 4"
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port &{port}`);
});