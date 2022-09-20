const Video = require("../models/video.model")

module.exports = {
  //POST - Create
  create(req, res) {
    const data = req.body

    const newVideo = {
      ...data,
    }

    Video.create(newVideo)
      .then((video) => {
        res.status(201).json({ message: "Video created", data: video })
      })
      .catch((err) => {
        res.status(400).json({ message: "Video could not be created", data: err })
      })

  }
}