const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: String,
    num: { type: Number },
  },
  {
    timestamps: true,
  }
);

const Board = mongoose.model("Board", boardSchema);
module.exports = Board;
