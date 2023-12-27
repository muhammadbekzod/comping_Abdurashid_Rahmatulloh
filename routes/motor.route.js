const { Router } = require("express");
const { createNewMotor } = require("../controller/motors.controller");

const router = Router();

router.post("/addNewMotor", createNewMotor);
module.exports = router;
