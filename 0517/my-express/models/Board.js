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

boardSchema.set("toJSON", { virtuals: true });
boardSchema.set("toObejct", { virtuals: true });

// 역참조가 필요할 때
boardSchema.virtual("comments", {
  ref: "Comment",
  localField: "_id", // Comment에서 참조하는 key (pk)
  foreignField: "board", // Comment fk
});

const Board = mongoose.model("Board", boardSchema);
module.exports = Board;
