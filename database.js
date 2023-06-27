const mongoose = require("mongoose");
const config = require("./config/keys");

const connectDB = async () => {
  const conn = await mongoose.connect(
    "mongodb+srv://almusallam296:Mom5699mom@cluster0.5d9ljgt.mongodb.net/"
  );
  console.log(`mongo connected: ${conn.connection.host}`);
};

module.exports = connectDB;
