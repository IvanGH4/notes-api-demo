require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes");

const PORT = 8001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

mongoose
  .connect(process.env.MONGO_DB_CONNECTION)
  .then(() => {
    console.log("[DATABASE] connected");
    app.listen(PORT, () => {
      console.log(`Server up on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
