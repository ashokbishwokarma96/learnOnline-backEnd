const express = require('express');
const studentController = require('../controller/studentController')
const route = express.Router();
const auth = require("../authentication")

route.get('/',studentController.allStudents)
route.route('/signup')
.post(studentController.signup);
route.route('/login')
.post(studentController.login);

module.exports = route;