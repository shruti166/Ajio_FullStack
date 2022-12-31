const express = require("express");
const payment = require("../controllers/payment.controller");
const paymentRoutes = express.Router();

paymentRoutes.post("/payment", async (req, res) => {
  const rs = await payment();
  return res.send(rs);
});

module.exports = paymentRoutes;
