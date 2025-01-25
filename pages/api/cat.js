import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const catsDir = path.join(process.cwd(), 'public/cats');
  const files = fs.readdirSync(catsDir);

  if (!files.length) {
    return res.status(404).json({ error: 'No images found' });
  }

  const randomFile = files[Math.floor(Math.random() * files.length)];

  res.status(200).json({ image: `/cats/${randomFile}` });
}
