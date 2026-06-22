const express = require("express");
const router = express.Router();

let users = [];

// Register User
router.post("/register", (req, res) => {
  const { username, email, password } = req.body;

  users.push({
    username,
    email,
    password
  });

  res.json({
    message: "User Registered Successfully"
  });
});

// Get All Users
router.get("/", (req, res) => {
  res.json(users);
});

module.exports = router;