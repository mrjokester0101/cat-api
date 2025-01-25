const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const catsDir = path.join(__dirname, "../public/cats");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.get("/random", (req, res) => {
  fs.readdir(catsDir, (err, files) => {
    if (err) return res.status(500).json({ error: "Failed to read images" });
    if (!files.length) return res.status(404).json({ error: "No images found" });

    const randomFile = files[Math.floor(Math.random() * files.length)];
    res.json({ image: `/cats/${randomFile}` });
  });
});

router.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });
  res.json({ message: "Upload successful", path: `/uploads/${req.file.filename}` });
});

module.exports = router;
