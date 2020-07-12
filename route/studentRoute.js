const express = require('express');
const studentController = require('../controller/studentController')
const route = express.Router();
const book = require('../controller/bookingC')
const auth = require("../authentication")
const user = require('../controller/courseController');

route.get('/',studentController.allStudents)

route.route('/signup')
.post(studentController.signup);

route.route('/login')
.post(studentController.login);

route.get("/me",auth.verifyStudent,studentController.me)

route.route ('/showcar')
.get(user.carshow);

route.route("/booking")
    .get((req, res) => {
        res.send("Booking success")
    })
    .post(auth.verifyStudent, book.booking);

    route.route('/course/:id')
.get(user.singleshow)

route.route ('/showbook')
.get(auth.verifyStudent, book.bookshow)

// route
//     .route("/me")
//     .get(auth.verifyStudent, studentController.getSingleUser)

route.route ('/allbooklist')
.get(book.allbooklist)

route.delete("/deletebook/:_id", book.deletebookingdata);

module.exports = route;