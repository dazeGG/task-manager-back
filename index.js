require("dotenv").config();

const express = require("express");
const router = require("./routes/index");
const mongoose = require("mongoose");
const setHeaders = require("./middlewares/setHeaders");

mongoose.connect(process.env.dbURI);

const app = express();

app.use(express.json());
app.use(setHeaders);
app.use("/api/", router);

const PORT = process.env.PORT || 5000;

const start = () => {
  try {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
