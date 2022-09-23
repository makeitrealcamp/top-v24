const router = require("express").Router()
const commentController = require("./comment.controller")

router.route("/").get(commentController.list)
router.route("/").post(commentController.create)

module.exports = router
