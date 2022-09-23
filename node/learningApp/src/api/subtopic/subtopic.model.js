const { Schema, model } = require("mongoose")

const subtopicSchema = new Schema(
  {
    title: String,
    description: String,
    topic: {
      type: Schema.Types.ObjectId,
      ref: "topic",
      required: true
    },
    comments: {
      type: [{ type: Schema.Types.ObjectId, ref: "comment" }],
      required: false
    }
  },
  {
    timestamps: true
  }
)

const Subtopic = model("subtopic", subtopicSchema)

module.exports = Subtopic