const express = require("express");
const payment = require("../controllers/payment.controller");
const paymentRoutes = express.Router();

paymentRoutes.post("/payment", async (req, res) => {
  const body = req.body;
  console.log(body);
  const rs = await payment(body);
  return res.send(rs);
});

module.exports = paymentRoutes;
