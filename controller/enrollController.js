const Enroll = require('../model/enrollModel');

exports.enroll = (req, res, next) => {
          console.log(req.student.email)
          console.log(req.body)
          const add = new Enroll({
                    studentEmail: req.student.email,
                    courseName: req.body.courseName,
                    coursePrice: req.body.coursePrice,
                    creditCardNumber: req.body.creditCardNumber
                    
          })
          add.save().then(response=>res.status(201).send("Student enrolled succesfully"))
                    .catch(err => res.send("Err" + err))
}