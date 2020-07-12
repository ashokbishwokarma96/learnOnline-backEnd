const jwt = require('jsonwebtoken');
const Student = require('./model/studentsModel');

exports.verifyStudent = (req, res, next) => {
    let authHeader = req.headers.authorization;
    console.log(authHeader)
    if (!authHeader) {
        res.status(400).json({status: 'Failed', mess: "asd"})
    }
    let token = authHeader.split(' ')[1];
    let data;
    try {
        data = jwt.verify(token, process.env.TOKEN);
    } catch (err) {
        throw new Error('No token! Please Login First.');
    }
    Student.findById(data.id)
        .then((student) => {
            req.student = student;
            console.log(req.student.studentname);
            next();
        }).catch(err=>res.send(err))
}
exports.verifyAdmin = (req, res, next) => {
    if (!req.student) {
        let err = new Error('Unauthorized');
        err.status = 401;
        return next(err);
    }
    if (req.student.user_type !== "admin") {
        let err = new Error('Forbidden');
        err.status = 403;
        return next(err);
    }
    next();
}