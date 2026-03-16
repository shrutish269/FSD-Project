const express = require("express");
const router = express.Router();

const { login } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/login", login);

router.get("/protected", authMiddleware, (req, res) => {
  res.json({ message: "Access granted to protected route" });
});

router.post("/logout", (req, res) => {
  res.json({
    message: "User logged out successfully"
  });
});

module.exports = router;