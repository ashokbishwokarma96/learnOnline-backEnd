const Booking = require("../model/bookingM");
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

describe("Booking Schema", () => {
  it("Should add Booking", async () => {
    let p = {
     email: "pranishkessi10@gmail.com",
     courseCode: "STW200",
     coursePrice: "11000",
     
    };
    let h1 = await Booking.create(p);
    expect(h1.email).toEqual("pranishkessi10@gmail.com", "STW200", "11000");
  });

  it("Should be able to provide Booking details", async () => {
    const status = await Booking.deleteMany();
    expect(status.ok).toBe(1);
  });
});