const express = require('express');
const bodyParser = require('body-parser');

require("dotenv").config();

require("./models/user");

const api = require("./api");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json());


app.get("/", (req, res) => {
    res.json({
        message: "Hello",
    });
});

app.use("/api/v1", api);

module.exports = app;