/** @format */

const users = require("../models/users.model");
const { v4: uuidv4 } = require("uuid");

//getting all  the user
const getAllUsers = (req, res) => {
  res.status(200).json({ users });
};

//creating new user
const createUser = (req, res) => {
  const { username, email } = req.body;

  const newUser = {
    id: uuidv4(),
    username,
    email,
  };

  users.push(newUser)

  res.status(200).json({ users });
};

module.exports = {
  getAllUsers,
  createUser,
};
