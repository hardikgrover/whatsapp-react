// importing
import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";

// // app config

const app = express();
const port = 9000;

// middlewares
app.use(express.json());

// DB config
mongoose.connect("mongodb://127.0.0.1:27017/whatsappdb", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// // api routes
app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.get("/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;

  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// // listner
app.listen(port, () => console.log(`Listening on local host${port}`));
