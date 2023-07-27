/** @format */

//for random id generation
const { v4: uuidv4 } = require("uuid");

const users = [
  {
    id: uuidv4(),
    username: "Tareq Monower",
    email: "Tareqmonower21@gmail.com",
  },
  {
    id: uuidv4(),
    username: "Tamim Hasan",
    email: "Tamimhasancu@gmail.com",
  },
];

module.exports = users
