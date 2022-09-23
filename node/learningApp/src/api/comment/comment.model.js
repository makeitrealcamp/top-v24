const { Schema, model } = require("mongoose")

const commentSchema = new Schema(
  {
    message: String,
    rate: Number,
    subtopic: {
      type: Schema.Types.ObjectId,
      ref: "subtopic",
      required: true
    }
  },
  {
    timestamps: true
  }
)

const Comment = model("comment", commentSchema)

module.exports = Comment