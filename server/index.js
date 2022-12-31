const express = require("express");
const connect = require("./db/connection");
const bodyParser = require("body-parser");
const cors = require("cors");
const paymentRoutes = require("./routes/payment.routes");
const loginRoute = require("./routes/login.routes");
const productRoutes = require("./routes/product.routes");

const app = express();
const PORT = process.env.PORT || 3001;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use(paymentRoutes);
app.use(loginRoute);
app.use(productRoutes);
connect().then(() => {
  app.listen(PORT, () => {
    console.log("Server listening at http://localhost:3001");
  });
});
