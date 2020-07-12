const Booking = require('../model/bookingM');
const jwt = require('jsonwebtoken');
const express = require('express');

const app = express();


exports.booking = (req, res, next) => {
  
    var booking = new Booking({    
        email: req.student.email,
        courseCode:req.body.courseCode,
        coursePrice: req.body.coursePrice
        
    })
    booking.save().then(book=> {
      res.status(201).send({
        status: "Success",  
        data: book
    })
  }).catch(err => {
        res.send({
            status: "Failure",
            err: err,
        })
    }
    );
}

exports.updatebook=(req, res,next)=> {
   const uid = req.params._id;
  console.log(uid)
  
    Booking.update(
      { _id: uid },
      {
        $set: {
       
        carName: req.body.carName
      
    
                }
      }
    )
      .then(function(user) {
        res.status(201).json({
          message: "User Details Updated Successfully"
        });
      })
      .catch(function(e) {
        res.status(422).json({
          message: "Unable to Update:" + e
        });
      });
    }


    exports.deletebookingdata = (req, res, next) => {
      Booking.findOneAndDelete({ _id: req.params._id })
      .then(res.send("Deleted Successfully")).catch(err=>res.send(err))
    }


    exports.bookshow =(req,res,next)=>{
      console.log(req.user);
      Booking.find({email:req.student.email}).then(result=>{
        res.send(result)
    
      }).catch(err=>res.send(err))
    }

    exports.allbooklist=(req,res,next)=>{
      Booking.find().then(result=>{
        res.send(result)
    
      }).catch(err=>res.send(err))
    }
   
  