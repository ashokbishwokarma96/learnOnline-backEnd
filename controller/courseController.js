const bcrypt = require('bcryptjs');
const auth = require('jsonwebtoken');

const Course = require('../model/courseModel');

exports.newCourse = (req,res,next) =>{
          console.log(req.body);
const newCourse = new Course({

          courseName: req.body.courseName,
          courseCode: req.body.courseCode,
          courseAvailability: req.body.courseAvailability,
          coursePrice: req.body.coursePrice,
          courseCreator: req.body.courseCreator,
          courseDescription: req.body.courseDescription
          
})
newCourse.save().then( res.status(201).send({
  status: "Success",
  message: "Course added successfully"
}))
.catch(err=>res.send(err))}

exports.courses = (req,res,next)=>{
          console.log("Students viewing main dashboard")
          Course.find().then(course=>{
      
                    res.status(200).send(course)
                
                
          }).catch(err=>res.send(err))
}

exports.course = (req,res,next)=>{
          console.log(req.params.id)
          Course.findById(req.params.id).then(course=>{
                    res.status(200).send(course)
          }).catch(err=>res.send(err))
        }

exports.update = (req, res, next) => {
          uid = req.params._id;
          console.log(uid)

          Course.update(
            { _id: uid },
            {
              $set: {
                    courseName: req.body.courseName,
                    courseCode: req.body.courseCode,
                    courseAvailability: req.body.courseAvailability,
                    coursePrice: req.body.coursePrice,
                    courseCreator: req.body.courseCreator,
                    courseDescription: req.body.courseDescription

              }
            }
          )
            .then(function (recipe) {
              res.status(201).json({
                message: "Course Updated Successfully"
              });
            })
            .catch(function (e) {
              res.status(422).json({

                message: "Unable to Update:" + e

              });
            });
        }

exports.delete=(req, res,next) => {
          Course.findById(req.params._id).then(user => {

                user
              .delete()
              .then(function(result) {
                res.status(201).json({

                  message: "Course Deleted Successfully"
                });
              })
              .catch(function(e) {
                console.log(e);
              });
          });
        }
