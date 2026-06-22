const express = require("express");
const router = express.Router();

let products = [];

// Add Product
router.post("/add", (req, res) => {
  const { name, price } = req.body;

  products.push({
    name,
    price
  });

  res.json({
    message: "Product Added Successfully"
  });
});

// Get All Products
router.get("/", (req, res) => {
  res.json(products);
});

module.exports = router;