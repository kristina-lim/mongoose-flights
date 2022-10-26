const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        required: true,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SFO']
    },
    arrival: {
        type: Date
    }
}, {
    timestamps: true
});

const flightSchema = new Schema({
    airline: {
        type: String,
        required: true,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        required: true,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SFO']
        // default: 'DEN'
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999,
    }, 
    departs: {
        type: Date,
        default: Date.now()
    },
    destinations: [destinationSchema]
});

module.exports = mongoose.model('Flight', flightSchema);