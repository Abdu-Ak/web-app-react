const express = require("express");
const router = express.Router();
const adminControllers = require('../controllers/admin/admin')


router.post("/getusers",adminControllers.getUsers)

router.post("/getedit",adminControllers.getEdit)

router.post("/delete",adminControllers.deleteUser)

router.post("/edituser",adminControllers.editUser)



module.exports = router;