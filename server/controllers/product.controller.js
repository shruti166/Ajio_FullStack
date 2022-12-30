const mongoose = require("mongoose");
const productModel = require("../models/products.model");
const getAllProduct = async ({
  page = 1,
  q = "",
  sortBy = "",
  order = "desc",
  limit = "10",
}) => {
  let skip = limit * page - 1;
  const products = await productModel
    .find({ title: q })
    .skip(skip)
    .limit(limit)
    .sort({ [sortBy]: order == "desc" ? -1 : 1 });
  return products;
};

const getProdById = async (id) => {
  const prod = await productModel.findById(id);
  return prod;
};

module.exports = { getAllProduct, getProdById };
