const catchAsync =  require('../utils/catchAsync');
const AppError =  require('../utils/AppError');

const Signal =  require('../models/signalModel');
const Factory  =  require('../controllers/factoryController')


exports.createSignal = Factory.createOne(Signal)

exports.readSignal = Factory.getAll(Signal)

exports.getAllSignals = Factory.getAll(Signal)

exports.getCurrentSignal =   Factory.getCurrentData(Signal);

exports.deleteSignals =   catchAsync(async (req,res,next) => {
    const signals = await Signal.deleteMany();
    if(!signals){
        return  next(new AppError("Request failed",400))
    }

    res.status(204).json({
        status  : "success"
    })
})