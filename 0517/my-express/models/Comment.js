const mongoose = require("mongoose");
const Board = require("./Board");
const { validate } = require("./Board");

const commentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      validate: (value) => value.length >= 5,
    },
    author: {
      type: String,
      required: true,
    },
    board: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Board"
    },
    tags: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
