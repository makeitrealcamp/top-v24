const { Schema, model } = require("mongoose")
const mongoosePaginate = require('mongoose-paginate-v2');

const commentSchema = new Schema(
  {
    message: String,
    rate: Number,
    subtopic: {
      type: Schema.Types.ObjectId,
      ref: "subtopic",
      required: true
    },
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

commentSchema.plugin(mongoosePaginate)
const Comment = model("comment", commentSchema)

module.exports = Comment