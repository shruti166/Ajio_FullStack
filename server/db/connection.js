const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

async function connect() {
  url =
    "mongodb+srv://shruti166:pw05_166@cluster0.q022tkn.mongodb.net/ajiodb?retryWrites=true&w=majority";

  return new Promise((resolve, reject) => {
    mongoose.connect(
      url,
      { useNewUrlParser: true, useUnifiedTopology: true },
      (err) => {
        if (err) {
          console.log("Error in connecting to database");
          return reject(err);
        }
        console.log("Connected to DB");
        resolve();
      }
    );
  });
}

module.exports = connect;
