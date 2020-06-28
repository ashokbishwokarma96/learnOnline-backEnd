const express = require('express');
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const morgan = require('morgan');

const main = require('./route/mainRoute');
const course = require('./route/courseRoute');

const app = express();

//Database connection
mongoose.connect(process.env.DATABASE,{
          useNewUrlParser: true,
          useCreateIndex: true,
          useUnifiedTopology: true
}).then(()=>{
          console.log("DB CONNECTED "+process.env.DATABASE)
}).catch(err=>{
          console.log("ERROR "+err)
});

// for handliing cors errors
app.use((req, res, next) => {
          res.header("Access-Control-Allow-Origin", "*");
          res.header(
            "Access-Control-Allow-Headers",
            "Origin,X-Requested-With,Content-Type,Authorization"
          );
          if (req.method === "OPTIONS") {
            res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH,DELETE");
            return res.status(200).json({});
          }
          next();
        });

        app.use(express.static(__dirname+"/public"));
        app.use(morgan("dev"));
        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({extended:false}));

        app.use("/",main);
        app.use("/course",course)

        app.listen(process.env.PORT,()=>{
          console.log("Server Running. "+ process.env.PORT);
})