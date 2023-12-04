const express = require("express");
const authcontroller = require("../controllers/auth-contoller");
const router = express.Router();
const validator = require("../validator/auth-validator");
const validate = require("../middleware/validate-middleware");






router.route("/").get(authcontroller.home);


router.route("/register").post(validate(validator.signupSchema), authcontroller.register);
router.route("/login").post(validate(validator.loginSchema), authcontroller.login);
module.exports = router;