const express = require("express");
const router = express.Router();
const custumerController = require("../controllers/custumerController");

router.get("/", custumerController.getAllCustomer);
router.get("/:id", custumerController.getOneCustomer);
router.post("/", custumerController.createCustomer);
router.put("/:id", custumerController.updateCustomer);
router.delete("/:id", custumerController.deleteCustomer);

module.exports = router;
