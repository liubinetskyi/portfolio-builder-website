const express = require('express');
const User = require("../models/user");
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post("/login", async (req, res) => {
    const {email, password} = req.body;

    const userWithEmail = await User.findOne({where: {email}}).catch((err) => {
        console.log("Error: ", err);
    });

    if (!userWithEmail) {
        return res.json({message: "Email or password does not match"});
    }

    if (userWithEmail.password !== password) {
        return res.json({message: "Email or password does not match"});
    }

    const jwToken = jwt.sign({id: userWithEmail.id, email: userWithEmail.email}, process.env.JWT_SECRET);

    res.json({message: "You are logged in!", token: jwToken});
})

module.exports = router;