"use strict";
const express = require("express");
const app = express();
const cartroute = require("./routes/cartroute");

app.use(express.json());
app.use(express.static("./public"));
app.use("/", cartroute);

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on Port: ${port}`);
});