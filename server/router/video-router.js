const express = require("express");
const contactcontroller = require("../controllers/service-controller");
const router = express.Router();
const validator = require("../validator/auth-validator");
const validate = require("../middleware/validate-middleware");


router.route("/videos").post();

module.exports = router;