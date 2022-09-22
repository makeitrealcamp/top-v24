const { update } = require("../models/video.model")
const Video = require("../models/video.model")
const User = require("../models/user.model")

module.exports = {
  //GET - list 
  //GET:id - Show
  //POST - create
  //PUT - update
  //DELETE - destroy


  // GET
  list(req, res) {
    Video.find().populate({
      path: "user",
      select: "name email"
    })
      .then((video) => {
        res.status(200).json({ message: "Videos found", data: video })
      })
      .catch((err) => {
        res.status(400).json({ message: "Videos not found", data: err })
      })
  },

  // GET:id
  async show(req, res) {
    try {
      const { videoId } = req.params

      const video = await Video.findById(videoId).populate({
        path: "user",
        select: "name email -_id"
      })

      res.status(200).json({ message: "Video found", data: video })
    } catch {
      (err)
      res.status(400).json({ message: "Video not found", data: err })
    }

  },


  //POST
  async create(req, res) {
    try {
      const { userId } = req.params
      const data = req.body
      const user = await User.findById(userId)

      if (!user) {
        throw new Error("Usuario invalido")
      }

      const newVideo = {
        ...data,
        user: userId
      }

      const video = await Video.create(newVideo)
      user.videos.push(video)
      await user.save({ validateBeforeSave: false })

      res.status(201).json({ message: "Video created", data: video })
    } catch (err) {
      res.status(400).json({ message: "Video could not be created", data: err })
    }
  },

  // PUT:id
  update(req, res) {
    const { videoId } = req.params

    Video.findByIdAndUpdate(videoId, req.body, { new: true })
      .then((video) => {
        res.status(200).json({ message: "Video updated", data: video })
      })
      .catch((err) => {
        res.status(400).json({ message: "Video could not be updated", data: err })
      })
  },

  // DELETE:id
  destroy(req, res) {
    const { videoId } = req.params

    Video.findByIdAndDelete(videoId)
      .then((video) => {
        res.status(200).json({ message: "Video deleted", data: video })
      })
      .catch((err) => {
        res.status(400).json({ message: "Video could not be deleted", data: err })
      })
  }
}