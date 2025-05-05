const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const permissionVerify = require("./permissionVerify");

// aplica o middlware permissionVeriy em todas as rotas definidas em userRouter.js
router.use(permissionVerify);

router.get("/", userController.getAllUsers);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
