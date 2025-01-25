const fs = require('fs');
const path = require('path');

const catsDir = path.join(__dirname, 'cats');
const catFiles = fs.readdirSync(catsDir);

function getRandomCatImage() {
  const randomCat = catFiles[Math.floor(Math.random() * catFiles.length)];
  return `/cats/${randomCat}`;
}

const jsonContent = {
  image: getRandomCatImage(),
};

fs.writeFileSync(path.join(__dirname, 'cat.json'), JSON.stringify(jsonContent));
