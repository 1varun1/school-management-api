const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// POST /addSchool
router.post("/", async (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  if (
    !name ||
    !address ||
    typeof latitude !== "number" ||
    typeof longitude !== "number"
  ) {
    return res
      .status(400)
      .json({ error: "All fields are required and must be valid" });
  }

  try {
    const [result] = await pool.query(
      "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)",
      [name, address, latitude, longitude]
    );
    res.status(201).json({ id: result.insertId });
  } catch (error) {
    res.status(500).json({ error: "Failed to add school" });
  }
});

module.exports = router;
