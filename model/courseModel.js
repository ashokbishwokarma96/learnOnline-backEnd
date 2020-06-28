const mongoose = require('mongoose');

const courseData = mongoose.Schema({
          courseName: {
                    type: String,
                    required: true
          },
          courseCode: {
                    type: String,
                    required: true
          },
          courseAvailability: {
                    type: String,
                    required: true
          },
          coursePrice: {
                    type: Number,
                    required: true
          },
          courseCreator: {
                    type: String,
                    required: true
          },
       
          courseDescription: {
                    type: String,
                    required: true
          }
})

module.exports = mongoose.model("Courses",courseData)