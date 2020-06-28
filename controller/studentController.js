const bcrypt = require('bcryptjs');
const auth = require('jsonwebtoken');
const Student = require('../model/studentsModel');

exports.signup = (req, res, next) => {
          console.log(req.body);
                  let password = req.body.password;
        
                  bcrypt.hash(password, 10, function(err,hash) {
                            if (err) {
                                      return new Error("no encryption " + err);
                            }
                            else {
                                      console.log(hash);
                                      const newStudent = new Student({
                                                name: req.body.name,
                                                email: req.body.email,
                                                password: hash,
                                                phone: req.body.phone
                                      })
        
                                      newStudent.save()
                                      .then(student=>{
                                                const token = auth.sign({_id: student._id},process.env.TOKEN);
                                                res.status(201).send({
                                                          status: "Success",
                                                          token: token
                                                })
                                      })
                                      .catch(err=>{
                                                res.status(500).send({
                                                          status: "Failure",
                                                          error: err
                                                })
                                      })
                            }
                  })
        }

        
exports.login=(req, res,next)=> {
          console.log(req.body);
                  Student.findOne({email:req.body.email}, function(err,student){
                     if (err) {
                      console.log(req.body.email);
                         } 
                         else if(student) {
                           if(bcrypt.compareSync(req.body.password, student.password)) {
                  
                      const token = auth.sign({id: student._id},process.env.TOKEN);
                      res.status(201).json({
                        status:"Login Success!",
                        token:token,
                        email:student.email,
                        admin: student.admin});
                        }
                        else{res.json({status:"error", message: "Invalid email/password!!!", data:null});}
                    }
                    else{
                      console.log(err);
                    res.status(404).json({
                        error:"Invalid email/password!!!"
                    });
                    }
                   })
                  }

exports.allStudents = (req,res,next)=>{
                    Student.find().then(student=>{
                              res.status(200).send(student)
                    }).catch(err=>res.send(err))
          }


exports.me = async (req, res, next) => {
            try {
              res.status(200).json(req.student);
            } catch (err) {
              res.status(400).json({
                status: "Failure",
                message: err
              });
            }
          };