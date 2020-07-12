const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({

    email: {
        type: mongoose.Schema.Types.String,
        ref: 'Student',
        required: true
    },
    courseCode: {
        type: mongoose.Schema.Types.String,
        ref: 'Course',
        required: true
    },
    coursePrice: {
        type: mongoose.Schema.Types.String,
        ref: 'Course',
        required: true
    },
    
})

const bookings = mongoose.model("Booking",bookingSchema);

module.exports = bookings