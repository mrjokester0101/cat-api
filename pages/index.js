import { useEffect, useState } from 'react';

export default function Home() {
  const [catImage, setCatImage] = useState(null);

  useEffect(() => {
    const fetchCatImage = async () => {
      const response = await fetch('/api/cat');
      const data = await response.json();
      setCatImage(data.image);
    };

    fetchCatImage();
  }, []);

  return (
    <div>
      <h1>Random Cat Image</h1>
      {catImage ? (
        <img src={catImage} alt="Random Cat" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
