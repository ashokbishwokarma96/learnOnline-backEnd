const express = require('express');
const studentController = require('../controller/studentController')
const route = express.Router();
const book = require('../controller/bookingC')
const auth = require("../authentication")
const msg = require('../controller/commentC')
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


route.route("/comment")
    .get((req, res) => {
        res.send("comment successfully")
    })
    .post(auth.verifyStudent, msg.comment);

    route.route ('/showcomment')
.get(msg.usercomment)

route.delete("/commentdata/:_id", msg.commentdata);

route.route ('/alluserlist')
.get(studentController.userlist)

route.route('/car/:id')
.get(user.singleshow)

module.exports = route;