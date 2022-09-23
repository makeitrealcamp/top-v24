const { Schema, model } = require("mongoose")

const topicSchema = new Schema(
  {
    title: String,
    description: String,
    subtopics: {
      type: [{ type: Schema.Types.ObjectId, ref: "subtopic" }],
      required: false
    }
  },
  {
    timestamps: true
  }
)

const Topic = model("topic", topicSchema)

module.exports = Topic