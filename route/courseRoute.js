const express = require('express');
const courseController = require('../controller/courseController');
const route = express.Router();

route.route('/')
.post(courseController.newCourse)
.get(courseController.courses);

route.route('/:_id')
.patch(courseController.update)
.delete(courseController.delete)
.get(courseController.course)

module.exports= route;