const express = require("express");
const router = express.Router();
const userControllers = require('../controllers/user/user')
const multer = require("multer");
const { storage , cloudinary } = require('../middleware/cloudinary');
const upload = multer({storage});


router.post('/register',userControllers.postSignup)

router.post('/postLogin',userControllers.postLogin)

router.post('/profile',userControllers.Profile)

router.post('/setDp/:id',upload.single('image'),userControllers.setDp)





module.exports = router;