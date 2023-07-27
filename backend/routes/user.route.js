/** @format */

const express = require("express");
const { getAllUsers,createUser, updateUser } = require("../controllers/users.controller");
const router = express.Router();

router.get("/", getAllUsers);
router.post("/", createUser);
router.put("/:id", updateUser);

module.exports = router;
