// importing
// const mongoose = require("mongoose");
import express from "express";
import mongoose from "mongoose";
// const express = require("express");

// // app config
// const express = require("express");
const app = express();
const port = 9000;
app.use(express.json());

// middlewares

// DB config
mongoose.connect("mongodb://127.0.0.1:27017/whatsappdb", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
console.log("hih");

// // api routes
app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

// // listner
app.listen(port, () => console.log(`Listening on local host${port}`));
