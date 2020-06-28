const express = require('express');
const courseController = require('../controller/courseController');
const route = express.Router();

route.route('/')
.get(courseController.courses)

module.exports= route;