const express = require("express");
const { createUser, loginUser } = require("../controller.js/userController");
const router = express();

router.post('/user/addnew' , createUser)
router.post('/user/login',  loginUser)
module.exports = router;
