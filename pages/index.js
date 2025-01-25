import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [catImage, setCatImage] = useState(null);

  useEffect(() => {
    const fetchCatImage = async () => {
      const response = await fetch('/api/theofficialapithatcatapiactuallyuses');
      const data = await response.json();
      setCatImage(data.image);
    };

    fetchCatImage();
  }, []);

  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <h1 className={styles.title}>Random Cat Image</h1>
        {catImage ? (
          <Image
            className={styles.catImage}
            src={catImage}
            alt="Random Cat"
              layout="intrinsic"
          />
        ) : (
          <div className={styles.loading}>Loading...</div>
        )}
      </div>
    </div>
  );
}
