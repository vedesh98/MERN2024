const express = require("express");
const servicecontroller = require("../controllers/service-controller");
const router = express.Router();
const validator = require("../validator/auth-validator");
const validate = require("../middleware/validate-middleware");


router.route("/videos/add").post(validate(validator.videoSchema),servicecontroller.AddVideos);
router.route("/videos").get(validate(validator.videoSchema),servicecontroller.videolist);

module.exports = router;