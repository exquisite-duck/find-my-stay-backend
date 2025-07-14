const {Sequelize} = require("sequelize");
// Example: Destructuring vs Non-Destructuring
//
// // Without Destructuring (Old way)
// // const person = {
// //   name: "John",
// //   age: 30,
// //   job: "Developer"
// // };
// // const name = person.name;
// // const age = person.age;
// // console.log(name); // John
// // console.log(age);  // 30
//
// // With Destructuring (Modern way)
// const person = {
//   name: "John",
//     age: 30,
//       job: "Developer"
//       };
//       const { name, age } = person;
//       console.log(name); // John
//       console.log(age);  // 30
// }
// }
const config = require('./index.js');
console.log("DataBase Info");
console.log(`DataBase Name : ${config.DB_NAME}`);
console.log(`DataBase User : ${config.DB_USER}`);
console.log(`DataBase Host and Port : ${config.DB_HOST}: ${config.DB_PORT}`);
console.log(`DataBase Type : ${config.DB_DIALECT}`);


// new sequelizer = new (database, username, password, options)
//
const sequelizer = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASSWORD, {
  host : config.DB_HOST,
  dialect : config.DB_DIALECT,
  port : config.DB_PORT,
  logging : false
});


try {
  sequelizer.authenticate(); // sends a simple query and confirms if the db is working or not 
  console.log("DB is working fine");
} catch(error) {
  console.log("Damn bro u db connection is shit", error);
}

module.exports = {sequelizer};
