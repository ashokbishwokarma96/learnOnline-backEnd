const Student = require("../model/studentsModel");
const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/test";
beforeAll(async () => {
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Students Schema", () => {
  it("Should login", async () => {
    let p = {
     email: "pranish@gmail.com",
     password: "1234567890"
    };
    let h1 = await Student.create(p);
    expect(h1.email).toEqual("pranish@gmail.com", "1234567890");
  });

  it("Should be able to provide login details", async () => {
    const status = await Student.deleteMany();
    expect(status.ok).toBe(1);
  });
});
