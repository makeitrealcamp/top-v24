const Comment = require("./comment.model")
const Subtopic = require("../subtopic/subtopic.model")


module.exports = {
  async list(req, res) {
    try {
      const comments = await Comment.find()
      res.status(200).json({ message: "Comment found", data: comments })
    } catch (error) {
      res.status(400).json({ message: "Comment not found", data: err })
    }
  },

  //POST 
  async create(req, res) {
    try {
      const data = req.body

      const subtopic = await Subtopic.findById(data.subtopic)

      if (!subtopic) {
        throw new Error("El subtema no existe")
      }

      const comment = await Comment.create(data)
      subtopic.comments.push(comment)
      await subtopic.save({ validateBeforeSave: false })

      res.status(200).json({ message: "Comment created", data: comment })

    } catch (err) {
      res.status(400).json({ message: "Comment could not created", data: err })
    }
  }
}