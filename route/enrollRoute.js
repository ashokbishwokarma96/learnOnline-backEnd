const express = require('express');
const enrollController = require('../controller/enrollController');
const routeNew = express.Router();
const authentication = require('../authentication')


routeNew.route('/new').get((req,res)=>{res.send("New Enroll route")})
 .post(authentication.verifyStudent,enrollController.enroll)
// /.post((req,res)=>{res.status(201).send("req.student")})

module.exports= routeNew;