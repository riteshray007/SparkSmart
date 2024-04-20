const express = require('express')
const register = require("../controller/Auth/Register");
const userLogin = require("../controller/Auth/Login");

const router = express.Router();


router.post("/register", register);


router.post("/login", userLogin);


module.exports = router;