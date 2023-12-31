const { Router } = require("express");
const {
  createNewMotor,
  getByMotorId,
  getAllMotors,
  deleteMotor,
} = require("../controller/motors.controller");

const router = Router();

router.get("/getAllMotors", getAllMotors);
router.post("/addNewMotor", createNewMotor);
router.get("/:id", getByMotorId);
router.delete("/:id", deleteMotor);
module.exports = router;
