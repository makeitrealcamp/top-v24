const Comment = require("./comment.model")
const Subtopic = require("../subtopic/subtopic.model")
const User = require("../user/user.model")
const { setDriver } = require("mongoose")
const { rawListeners } = require("../subtopic/subtopic.model")


module.exports = {
  async list(req, res) {
    const { limit = 10, page = 1 } = req.query
    //console.log("QUERYS", typeof rate)
    try {
      const comments = await Comment.paginate({},
        {
          limit: limit,
          page: page,
          populate: [
            {
              path: "subtopic",
              select: "title description",
            },
            {
              path: "user",
              select: "name email -_id"
            }
          ]
        })
      res.status(200).json({ message: "Comment found", data: comments })
    } catch (error) {
      res.status(400).json({ message: "Comment not found", data: err })
    }
  },

  //POST 
  async create(req, res) {
    try {
      const data = req.body
      const { userId } = req.params

      const user = await User.findById(userId)

      if (!user) {
        throw new Error("El usuario no existe")
      }

      const subtopic = await Subtopic.findById(data.subtopic)

      if (!subtopic) {
        throw new Error("El subtema no existe")
      }

      const comment = await Comment.create({ ...data, user: userId })
      user.comments.push(comment)
      await user.save({ validateBeforeSave: false })
      subtopic.comments.push(comment)
      await subtopic.save({ validateBeforeSave: false })

      res.status(200).json({ message: "Comment created", data: comment })

    } catch (err) {
      res.status(400).json({ message: "Comment could not created", data: err })
    }
  }
}