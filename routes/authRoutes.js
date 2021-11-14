const express= require("express");
const router = express.Router();
const auth= require("../models/auth");
const bcrypt= require("bcrypt");
const jwt = require("jsonwebtoken");
const { register, login } = require("../controllers/auth");

router.post("/register",register)

router.post('/login', login);

module.exports=router;