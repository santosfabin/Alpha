import express from "express";
const router = express.Router();
const loginController = require("../controller/loginController");

router.post("/", loginController.login);

module.exports = router;
