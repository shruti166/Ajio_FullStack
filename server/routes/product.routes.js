const express = require("express");
const {
  getAllProduct,
  getProdById,
} = require("../controllers/product.controller");

const productRoutes = express.Router();

productRoutes.get("/product", async (req, res) => {
  const {
    q = "",
    limit = 10,
    page = 1,
    sort = "_id",
    order = "asc",
    cat = "",
    size = "",
  } = req.query;

  const rs = await getAllProduct(q, +limit, +page, sort, order, cat, size);
  return res.send(rs);
});

productRoutes.get("/product/:id", async (req, res) => {
  const id = req.params.id;
  const rs = await getProdById(id);
  return res.send(rs);
});

module.exports = productRoutes;
