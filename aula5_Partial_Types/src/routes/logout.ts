import express from "express";
const router = express.Router();

const logoutController = require("../controller/logoutController");
const {verifyActiveSession} = require("../middleware");

router.delete("/", verifyActiveSession, logoutController.logout);

module.exports = router;
