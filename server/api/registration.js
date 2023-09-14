const express = require('express');
const router = express.Router();
const User = require("../models/user");

router.post("/register", async (req, res) => {

    const {firstName, lastName, email, password} = req.body;

    const alredyExistsUser = await User.findOne({where: {email}}).catch((err) => {
        console.log("Error: ", err);
    });

    if (alredyExistsUser) {
        return res.json({message: "User with email already exists"})
    }

    const newUser = new User({firstName, lastName, email, password});
    const savedUser = await newUser.save().catch((err) => {
        console.log("Error: ", err);
        res.json({error: "User registration failed"})
    });
    if (savedUser) {
        res.json({message: "User registered successfully"});
    }
});

module.exports = router;
