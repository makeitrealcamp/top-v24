const router = require("express").Router();
const userController = require("../controllers/user.controller");

router.route("/").get(userController.list)
router.route("/:userId").get(userController.show)
router.route("/").post(userController.create);

module.exports = router;

