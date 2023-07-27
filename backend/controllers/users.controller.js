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

  users.push(newUser);

  res.status(200).json({ users });
};

//updating user
const updateUser = (req, res) => {
  const { id } = req.params;
  const { username, email } = req.body;

  users
    .filter((user) => user.id === id)
    .map((updatedUser) => {
      updatedUser.username = username;
      updatedUser.email = email;
    });
  res.status(200).json({ users });
};

//deleting user
const deleteUser = (req, res) => {
  const { id } = req.params;
  const NewUsers = users.filter((user) => user.id !== id);
  res.status(200).json({ users : NewUsers });
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
};
