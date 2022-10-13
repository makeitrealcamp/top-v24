const { Schema, model } = require("mongoose")

const commentSchema = new Schema(
  {
    message: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true
    }
  },
  {
    timestamps: true
  }
)

const Comment = model("comment", commentSchema)

module.exports = Comment