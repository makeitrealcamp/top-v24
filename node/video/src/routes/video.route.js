const router = require("express").Router();
const videoController = require("../controllers/video.controller");

router.route("/").post(videoController.create)

module.exports = router;