import {Router} from "express";
const router: Router = Router();

const users = require("./users");
const login = require("./login");
const logout = require("./logout");

router.use("/users", users);
router.use("/login", login);
router.use("/logout", logout);

export default router;
