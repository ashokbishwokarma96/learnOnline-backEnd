const Car = require('../model/courseModel');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const express = require('express');

const app = express();

var storage = multer.diskStorage(
  {
    destination: (req, res, cb) => {
      cb(null, "./public/uploads/cars")
    },

    filename: (req, file, cb) => {
      cb(null, Date.now() + file.originalname)
    }
  }
);

const filter = (req, file, cb) => {
  if (file.originalname.match(/\.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$/)) {
    cb(null, true);
  }
  else {
    return cb(new Error("Invalid image file type."))
  }
}

var upload = multer({ storage: storage, fileFilter: filter });

exports.uploadImage = upload.single('image');

exports.carAdd = (req, res, next) => {
  var car = new Car({
    courseName: req.body.courseName,
    courseCode: req.body.courseCode,
    courseAvailability: req.body.courseAvailability,
    coursePrice: req.body.coursePrice,
    courseCreator: req.body.courseCreator,
    courseDescription: req.body.courseDescription,
    
    image: req.file.filename

  })
  car.save().then(res.status(201).send({
    status: "Success",
    data: car
  })
  ).catch(err => {
    res.send({
      status: "Failure",
      err: err,
    })
  }
  );
}

exports.carshow = (req, res, next) => {
  Car.find().then(result => {
    res.send(result)

  }).catch(err => res.send(err))
}

exports.singleshow = (req, res, next) => {
  Car.findById(req.params.id).then(result => {
    res.send(result)

  }).catch(err => res.send(err))
}

exports.updatecar = (req, res, next) => {
  uid = req.params._id;
  console.log(uid)
  
  Car.update(
    { _id: uid },
    {
      $set: {
       
        carName: req.body.carName,
        carRegistrationNo: req.body.carRegistrationNo,
        carMan: req.body.carMan,
        carAC_Status: req.body.carAC_Status,
        carMileage: req.body.carMileage,
        carRentalPrice: req.body.carRentalPrice,
        carSeats: req.body.carSeats

      }
    }
  )
    .then(function (user) {
      res.status(201).json({
        message: "User Details Updated Successfully"
      });
    })
    .catch(function (e) {
      res.status(422).json({
        message: "Unable to Update:" + e
      });
    });
}


exports.deleteUser = (req, res, next) => {
  Car.findOneAndDelete({ _id: req.params._id })
    .then(res.send("Deleted Successfully")).catch(err => res.send(err))
}

exports.countCar = async (req, res) => {
  await Car.find().then(use => {
    res.send({ countCar: use.length })
  }).catch(err => res.send(err))
};