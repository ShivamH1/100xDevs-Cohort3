const express = require("express");
const app = express();
const port = 8080;

var users = [{
    name : "John",
    kidneys : [{
        healthy : false
    }]
}];

app.use(express.json());

//check on kidneys
app.get('/',(req,res) => {
    const johnKidneys = users[0].kidneys;
    const noOfKidneys = johnKidneys.length;
    let numOfHealthyKidneys = 0;
    for (let i = 0; i < johnKidneys.length; i++){
        if(johnKidneys[i].healthy){
            numOfHealthyKidneys += 1;
        }
    }
    const noOfUnhealthyKidneys = noOfKidneys - numOfHealthyKidneys;
    res.json({
        noOfKidneys,
        numOfHealthyKidneys,
        noOfUnhealthyKidneys,
    });
});

//inserting kidneys healthy or unhealthy
app.post('/',(req,res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    });
    res.json({
        msg : "Done!",
    });
});

//replacing unhealthy kidneys to healthy
app.put('/', (req,res) => {
    //check
    if(isUnhealthy()){
        for (let i = 0; i < users[0].kidneys.length; i++){
            users[0].kidneys[i].healthy = true;
        }
        res.json({});
    }else{
        res.status(411).json({
            msg : "There are no unhealthy kidneys"
        })
    }
});

//removing unhealthy kidneys
app.delete('/', (req, res) => {
    //check
    if(isUnhealthy()){
        const newKidneys = [];
        for (let i = 0; i < users[0].kidneys.length; i++){
            if (users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy : true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({
            msg : "Done!"
        })
    }else{
        res.status(411).json({
            msg : "You have no bad kidneys"
        });
    }
    
});

function isUnhealthy(){
    let atleastOneUnHealthy = false;
    for (let i = 0; i < users[0].kidneys.length; i++){
        if (!users[0].kidneys[i].healthy){
            atleastOneUnHealthy = true;
        }
    }
    return atleastOneUnHealthy;
}

app.listen(port);