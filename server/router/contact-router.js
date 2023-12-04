const express = require("express");
const contactcontroller = require("../controllers/contact-contoller");
const router = express.Router();
const validator = require("../validator/auth-validator");
const validate = require("../middleware/validate-middleware");


router.route("/contact").post(validate(validator.contactScema), contactcontroller.contactform);


module.exports = router;