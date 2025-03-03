const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router.get("/search", orderController.searchOrder);


router.get("/", orderController.getAllOrder);
router.get("/:id", orderController.getOneOrder);
router.post("/", orderController.createOrder);
router.put("/:id", orderController.updateOrder);
router.delete("/:id", orderController.deleteOrder);


module.exports = router;
