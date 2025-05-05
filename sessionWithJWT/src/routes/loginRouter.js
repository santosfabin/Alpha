const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");
const permissionVerify = require("./permissionVerify");

router.get("/", permissionVerify, loginController.getLogin);
router.post("/", loginController.autenticate);

module.exports = router