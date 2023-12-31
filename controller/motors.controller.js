const asyncHandler = require("../middleware/async");
const Motors = require("../models/motors");

exports.getAllMotors = asyncHandler(async (req, res, next) => {
  const pageLimit = process.env.DEFAULT_PAGE_LIMIT || 10;

  const limit = parseInt(req.query.limit || pageLimit);
  const page = parseInt(req.query.page || 1);
  const total = await Motors.countDocuments();

  const motors = await Motors.find()
    .skip(page * limit - limit)
    .limit(limit);
  res.status(200).json({
    success: true,
    pageCount: Math.ceil(total / limit),
    currentPage: page,
    next: Math.ceil(total / limit) < page + 1 ? null : page + 1,
    data: motors,
  });
});

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

exports.getByMotorId = asyncHandler(async (req, res, next) => {
  const motor = await Motors.findById(req.params.id);
  res.status(200).json({
    success: true,
    data: motor,
  });
});

exports.deleteMotor = asyncHandler(async (req, res, next) => {
  await Motors.findByIdAndDelete(req.params.id);
  res.status(200).send("Deleted Successfully");
});
