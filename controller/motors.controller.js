const asyncHandler = require("../middleware/async");
const Motors = require("../models/motors");

exports.getAllMotors = async (req, res, next) => {};

exports.createNewMotor = asyncHandler(async (req, res, next) => {
  const newMotor = await Motors.create({
    name: req.body.name,
    company: req.body.company,
    cost: req.body.cost,
    licence: req.body.licence,
  });

  res.status(200).json({
    success: true,
    data: newMotor,
  });
});
