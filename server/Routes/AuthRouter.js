const { signup, login } = require("../Controllers/AuthController");
const { signupvalidation, loginvalidation } = require("../Middleware/AuthValidation");
const router = require("express").Router();

router.post("/signup", signupvalidation, signup);
router.post("/login", loginvalidation, login);



module.exports = router;
