const mongoose = require("mongoose");

const connectDB = async (db) => {
  try {
    await mongoose.connect(db);
    console.log("Database connected...");
  } catch (err) {
    console.log(`Something went wrong...\n${err}`);
    process.exit(1);
  }
};

module.exports = connectDB;
