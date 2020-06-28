const mongoose = require('mongoose');

const enrollSchema = new mongoose.Schema({
          studentEmail: {
                    type: String,
                    reqired: true,
          },
          courseName: {
                    type: String,
                    required: true
          },
          coursePrice: {
                    type: Number,
                    required: true
          },
          creditCardNumber: {
                    type: Number,
                    required: true
          }
})
module.exports= mongoose.model("Enroll",enrollSchema);