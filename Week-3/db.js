const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://admin:India%40123@100xdev.7gly1js.mongodb.net/user_app');

const User = mongoose.model('Users', {name : String, email : String, password : String});
// const user = new User({name : 'Shivam', email : 'shivam@test.com', password : '12345'});
// user.save();

app.post('/signup', async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const userExist = await User.findOne({email : email});
    if(userExist){
        return res.status(400).send('Email already exists!');
    }

    const user = new User({
        name : name,
        email : email,
        password : password
    });

    user.save();
    res.json({
        msg : "User created successfully"
    });
});

app.listen(8080);