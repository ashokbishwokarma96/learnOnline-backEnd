const express = require('express');

const user = require('../controller/courseController');
const userbook = require('../controller/bookingC');
const upload = require('../controller/uploads');
const route = express.Router();

// route.post("/register",user.registerUser);
// route.get("/register",(req,res)=>{
//     res.send("USERS")
// });

route.get("/",(req,res)=>{
    res.send("ASD")
})

route.route("/caradd")
    .get((req, res) => {
        res.send("car added")
    })
    .post(user.uploadImage,user.carAdd);

    route.route ('/allbooklist')
    .get(userbook.allbooklist)
  
route.post("/upload", upload,(req,res)=>{
  console.log(req.file.filename)
  res.json(req.file)
});

route.patch("/updatecar/:_id",user.updatecar)
// route.patch("/updateuser/:_id",userdata.update)

// route.delete("/deleteUser/:_id",user.deleteUser);

// route.delete("/deleteComment/:_id",commentdata.deleteComment);

// route.delete("/deleteuserdata/:_id",userdata.Userdata);
module.exports = route;