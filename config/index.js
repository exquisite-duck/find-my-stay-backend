require('dotenv').config();

module.exports = {
  WEB_PORT : process.env.WEB_PORT,
  DB_NAME : process.env.DB_NAME,
  DB_HOST : process.env.DB_HOST,
  DB_PORT : process.env.DB_PORT,
  DB_DIALECT : process.env.DB_DIALECT,
  DB_USER : process.env.DB_USER,
  DB_PASSWORD : process.env.DB_PASSWORD
}

// dotenv.config() reads .env file and ADDS variables to the existing process.env object
// // After this line: process.env.WEB_PORT = "3000", process.env.DB_NAME = "LMS", etc.
