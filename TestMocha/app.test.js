process.env.NODE_ENV = "TestMocha";

var chai = require("chai");
var chaiHttp = require("chai-http");
var app = require("../index");
const should = chai.should();
chai.use(chaiHttp);

//for registration
describe("/POST user", () => {
  it("it should register the user info", (done) => {
    const user = {
        name: "Muskan Khadka",
        email:"muskan@gmail.com",
        password:"password123",
        phone:"1234567890",
      
    };
    chai
      .request(app)
      .post("/student/signup")
      .send(user)
      .end((err, res) => {
        res.should.have.status(401);
        res.body.should.be.a("object");
        done();
      });
  });
});


//Login TDD
describe("/POST user", () => {
  it("it should SignIn a user, provided registered email and password is entered", (done) => {
    const user = {
      email: "muskan@gmail.com",
      password: "password123",
    };
    chai
      .request(app)
      .post("/student/login")
      .send(user)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a("object");
        done();
      });
  });
});


// // for get students details
describe("/GET students", () => {
  it("it should Get all students detail", (done) => {
    chai
      .request(app)
      .get("/student")
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

