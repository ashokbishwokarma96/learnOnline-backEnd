const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    courseName: {
        type: String
    },
    courseAvailability: {
        type: String
    },
    courseCreator: {
        type: String
    },
    courseDescription: {
        type: String
    },
  
    courseCode:
    {
        type: String,
        unique: true,
        required: true
    },
    coursePrice: {
        type: String
    },
    image: {
        type: String
    }
})

const cars = mongoose.model("Courses",carSchema);


module.exports = cars
