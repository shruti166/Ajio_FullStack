const express = require("express");
const connect = require("./db/connection");
const bodyParser = require("body-parser");
const cors = require("cors");
const paymentRoutes = require("./routes/payment.routes");

const app = express();
const PORT = process.env.PORT || 3001;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.use(paymentRoutes);

connect().then(() => {
  app.listen(PORT, () => {
    console.log("Server listening at http://localhost:3001");
  });
});
