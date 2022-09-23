const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");

require("dotenv").config();

const cors = require("cors");
const app = express();
const sosRouter = require("./routes/sos.js");

const PORT = process.env.serverPort;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use("/api/sos", sosRouter);
const start = async () => {
  try {
    await mongoose.connect(process.env.dbUrl);
    app.listen(PORT, () => {
      console.log("Batya v dele on port", PORT);
    });
  } catch (e) {
    console.log("connnection error", e);
  }
};

start();
