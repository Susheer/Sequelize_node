const express = require("express");

const router = express.Router();
const action = require("../admin/action");
router.post("/product", (req, res) => {
  console.log("Create product", req.body);
  action.addProduct(req, res);
});

router.get("/product", (req, res) => {
  action.getAll(req, res);
});
router.get("/product/:productId", (req, res) => {
  action.getProduct(req, res);
});
module.exports = router;
