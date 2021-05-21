// const mongoose = require("mongoose")
import mongoose from "mongoose";

// schema

const whatsappShema = mongoose.Schema({
  message: String,
  name: String,
  timeStamp: String,
  recieved: Boolean,
});

export default mongoose.model("messagecontent", whatsappShema);
