const express = require('express');
const registerApi = require("./registration");
const loginApi = require("./login");

const router = express.Router();

router.use(registerApi);
router.use(loginApi);

module.exports = router;