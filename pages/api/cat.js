import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const catsDir = path.join(process.cwd(), "public/cats");

  fs.readdir(catsDir, (err, files) => {
    if (err) return res.status(500).json({ error: "Failed to read images" });
    if (!files.length) return res.status(404).json({ error: "No images found" });

    const randomFile = files[Math.floor(Math.random() * files.length)];

    res.status(200).json({ image: `/cats/${randomFile}` });
  });
}
