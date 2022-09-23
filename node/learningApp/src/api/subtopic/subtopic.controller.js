const Subtopic = require("./subtopic.model")
const Topic = require("../topic/topic.model")


module.exports = {
  async list(req, res) {
    try {
      const subtopics = await Subtopic.find().populate("topic")
      res.status(200).json({ message: "Subtopic found", data: subtopics })
    } catch (error) {
      res.status(400).json({ message: "Subtopic not found", data: err })
    }
  },

  //POST 
  async create(req, res) {
    try {
      const data = req.body
      const { topicId } = req.params

      const topic = await Topic.findById(topicId)

      if (!topic) {
        throw new Error("El tema no existe")
      }

      const subtopic = await Subtopic.create({ ...data, topic: topicId })
      topic.subtopics.push(subtopic)
      await topic.save({ validateBeforeSave: false })
      res.status(200).json({ message: "Subtopic created", data: subtopic })

    } catch (err) {
      res.status(400).json({ message: "Subtopic could not created", data: err })
    }
  }
}