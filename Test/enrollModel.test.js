const Enroll = require("../model/enrollModel");
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

describe("Enroll Schema", () => {
  it("Should add Enroll", async () => {
    let p = {
     studentEmail: "pranish@gmail.com",
     courseName: "Agile",
     coursePrice: "10000",
     creditCardNumber: "142315432123"
    };
    let h1 = await Enroll.create(p);
    expect(h1.studentEmail).toEqual("pranish@gmail.com", "Agile", "10000", "142315432123");
  });

  it("Should be able to provide new enrolled details", async () => {
    const status = await Enroll.deleteMany();
    expect(status.ok).toBe(1);
  });
});