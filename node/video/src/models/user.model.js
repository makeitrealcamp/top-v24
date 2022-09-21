const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    rol: String,
    name: String,
    age: Number,
    email: String,
    working: Boolean
  },
  { timestamps: true }
);

const User = model("User", userSchema);

module.exports = User;
