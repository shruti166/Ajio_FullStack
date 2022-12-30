const express = require("express");
const {
  getAllProduct,
  getProdById,
} = require("../controllers/product.controller");

const productRoutes = express.Router();

productRoutes.get("/product", async (req, res) => {
  const rs = await getAllProduct();
  return res.send(rs);
});

productRoutes.get("/product/:id", async (req, res) => {
  const id = req.params.id;
  const rs = await getProdById(id);
  return res.send(rs);
});

module.exports = productRoutes;
