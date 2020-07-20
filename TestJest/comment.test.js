const Comment = require("../model/commentM");
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

describe("Comment Schema", () => {
  it("Should add Comment", async () => {
    let p = {
     email: "pranishkessi10@gmail.com",
     courseName: "Agile",
     feedback: "Very Good",
     
    };
    let h1 = await Comment.create(p);
    expect(h1.email).toEqual("pranishkessi10@gmail.com", "Agile", "Very Good");
  });

  it("Should be able to provide Comment details", async () => {
    const status = await Comment.deleteMany();
    expect(status.ok).toBe(1);
  });
});