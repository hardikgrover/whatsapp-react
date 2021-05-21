// importing
import express from "express";
import mongoose, { mongo } from "mongoose";
import Messages from "./dbMessages.js";
import pusher from "pusher";

// // app config

const app = express();
const port = 9000;

const pusher = new Pusher({
  appId: "1206327",
  key: "a0a074ba8a4d08e0bb53",
  secret: "7cf1a001d849d9fd4dd5",
  cluster: "ap2",
  useTLS: true,
});

// middlewares
app.use(express.json());

// DB config
mongoose.connect("mongodb://127.0.0.1:27017/whatsappdb", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("db is connected");
});

const msgCollection = db.collection("messagecollection");
const changeStream = messageCollection.watch();

changeStream.on("change", (change) => {
  console.log(change);
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
