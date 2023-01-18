const express = require("express");
const router = express.Router();
const userControllers = require('../controllers/user/user')

router.post('/register',userControllers.postSignup)

router.post('/postLogin',userControllers.postLogin)









module.exports = router;