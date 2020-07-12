const mongoose = require('mongoose');

const studentData = mongoose.Schema({
          name: {
                    type: String,
                    reqired: true
          },
          email: {
                    type: String,
                    reqired: true,
                    unique: true
          },
          phone: {
                    type: Number,
                    reqired: true,
                    unique: true
          },

          password: {
                    type: String,
                    reqired: true       
          },
          user_type: {
            type: String,
            default:"user"
        },
})

module.exports = mongoose.model('Student', studentData)