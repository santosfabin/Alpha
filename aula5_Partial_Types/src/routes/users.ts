const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");

import {verifyActiveSession} from "../middleware";

// router.get("/users/:id", userController.listUser);
router.post("/", userController.createUser);

router.put("/:id", verifyActiveSession, userController.updateUser);
router.delete("/:id", verifyActiveSession, userController.removeUser);
router.get("/", verifyActiveSession, userController.showAllUsers);


module.exports = router;
