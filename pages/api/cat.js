import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const catsDir = path.join(process.cwd(), 'public', 'cats');
  const catFiles = fs.readdirSync(catsDir);
  const randomCat = catFiles[Math.floor(Math.random() * catFiles.length)];
  const catImageUrl = `/cats/${randomCat}`;
  res.status(200).json({ image: catImageUrl });
}
