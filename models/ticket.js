const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    seat: {
        type: String,
        match: /[A-F][1-9]\d?/
    },
    price: {
        type: Number,
        min: 0
    },
    flight: {
        type: Schema.Type.ObjectId,
        ref: 'Flight'
    }
});