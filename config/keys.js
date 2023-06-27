require("dotenv").config();

module.exports = {
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXP: process.env.JWT_EXP,
  MONGO_DB_URL: process.env.MONGO_DB_URL,
};
