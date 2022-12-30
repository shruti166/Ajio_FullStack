const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  image: String,
  title: String,
  brand: String,
  price: Number,
  offer_percent: Number,
  category: String,
  size: String,
});

const productModel = mongoose.model("products", productSchema);

module.exports = productModel;
