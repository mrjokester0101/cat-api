export default function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  res.json({ message: "Upload functionality needs external storage (S3, Cloudinary, etc.)" });
}
