const Topic = require("./topic.model")


module.exports = {
  async list(req, res) {
    try {
      const topics = await Topic.find().populate(
        {
          path: "subtopics",
          populate: {
            path: "comments",
            select: "message rate"
          }
        })
      res.status(200).json({ message: "Topic found", data: topics })
    } catch (error) {
      res.status(400).json({ message: "Topic not found", data: err })
    }
  },

  //POST 
  async create(req, res) {
    try {
      const data = req.body

      const topic = await Topic.create(data)
      res.status(200).json({ message: "Topic created", data: topic })

    } catch (err) {
      res.status(400).json({ message: "Topic could not created", data: err })
    }
  }
}