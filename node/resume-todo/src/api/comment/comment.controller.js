const Comment = require("./comment.model")
const User = require("../user/user.model")

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
      const { userId } = req.params

      const user = await User.findById(userId)

      if (!user) {
        throw new Error("El usuario no existe")
      }

      const comment = await Comment.create({ ...data, user: userId })
      user.comments.push(comment)
      await user.save({ validateBeforeSave: false })

      res.status(200).json({ message: "Comment created", data: comment })

    } catch (err) {
      res.status(400).json({ message: "Comment could not created", data: err })
    }
  }
}