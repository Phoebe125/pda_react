const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    backgroundColor: { type: String },
  },
  {
    timestamps: true,
  }
);

todoSchema.set("toJSON", { virtuals: true });
todoSchema.set("toObejct", { virtuals: true });


const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;