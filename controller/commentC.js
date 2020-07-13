const Comment = require('../model/commentM');
const jwt = require('jsonwebtoken');
const express = require('express');

const app = express();


exports.comment = (req, res, next) => {
  
    var comment = new Comment({
        
    
        email: req.student.email,
       
        courseName: req.body.courseName,
       feedback: req.body.feedback


    })
    comment.save().then(res.status(201).send({
        status: "Success",
        data: comment
    })
    ).catch(err => {
        res.send({
            status: "Failure",
            err: err,
        })
    }
    );
}



exports.commentdata = (req, res, next) => {
    Comment.findOneAndDelete({ _id: req.params._id })
    .then(res.send("Deleted Successfully")).catch(err=>res.send(err))
  }

 
exports.usercomment =(req,res,next)=>{
    Comment.find().then(result=>{
      res.send(result)
  
    }).catch(err=>res.send(err))
  }

