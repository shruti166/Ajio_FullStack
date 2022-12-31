const mongoose = require("mongoose");
const productModel = require("../models/products.model");
//   page = 1,
//   q = "",
//   sortBy = "",
//   order = "desc",
//   limit = "10",
const getAllProduct = async (q, limit, page, sort, order, cat, size) => {
  const products = await productModel
    .find({
      title: { $regex: q, $options: "i" },
      category: { $regex: cat },
      size: { $regex: size },
    })
    .skip(limit * (page - 1))
    .limit(limit)
    .sort({ [sort]: order == "desc" ? -1 : 1 });
  return products;
};

const getProdById = async (id) => {
  const prod = await productModel.findById(id);
  return prod;
};

module.exports = { getAllProduct, getProdById };
