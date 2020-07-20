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
  it("Should register Students", async () => {
    let p = {
     name: "pranishkc",
     email: "pranish@gmail.com",
     phone: "9851012312",
     password: "1234567890"
    };
    let h1 = await Student.create(p);
    expect(h1.name).toEqual("pranishkc","pranish@gmail.com", "9851012312", "1234567890");
  });

  it("Should be able to provide new user details", async () => {
    const status = await Student.deleteMany();
    expect(status.ok).toBe(1);
  });
});
