const router = require("express").Router();
const userController = require("./user.controller");

router.route("/").get(userController.list)
router.route("/:userId").get(userController.show)
router.route("/").post(userController.create);

module.exports = router;

