const Course = require("../model/courseModel");
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

describe("Courses Schema", () => {
  it("Should add Courses", async () => {
    let p = {
     courseName: "Agile",
     courseCode: "STW200",
     courseAvailability: "Yes",
     coursePrice: "10000",
     courseCreator: "Admin",
     courseDescription: "Basic"
    };
    let h1 = await Course.create(p);
    expect(h1.courseName).toEqual("Agile", "STW200", "Yes", "10000","Admin","Basic");
  });

  it("Should be able to provide course details", async () => {
    const status = await Course.deleteMany();
    expect(status.ok).toBe(1);
  });
});