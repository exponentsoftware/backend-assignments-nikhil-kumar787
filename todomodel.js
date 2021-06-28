const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20,
      },
      title: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20,
      },
      status: {
        type: Boolean,
        default: false,
      
      },
       category: {
        type: String,
        enum: ["work", "hobby", "task"],
        default: "task",
    },
},
    { timestamps: true }
  );

  module.exports = mongoose.model("Todo", todoSchema);