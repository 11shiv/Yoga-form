const express = require("express")
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");

// app.use(express.json());

// app.use("/api/auth" , router)





router.route("/").get(authcontrollers.home) ;


router.route('/register').post(authcontrollers.register) ;


module.exports = router ;