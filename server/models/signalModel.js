
const mongoose =  require('mongoose');

const SignalSchema = mongoose.Schema({
    temperature  : {
        type : String,
        required : true
    },
    PH: {
        type : String,
        required : true
    },
    purity: {
        type  : String,
        required : true
    },
    turbidity:{
        type : String,
        default : 0
    },
    water_level: {
        type : String,
        required : true
    },
    date_created: {
        type : Date,
        default : Date.now()
    }
});


const Signal = mongoose.model('Signal', SignalSchema);

module.exports = Signal;
