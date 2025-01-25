import { useEffect, useState } from 'react';
import Head from "next/head";
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home = () => {
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
    <div className={styles.all}>
      <div className={styles.container}>
        <Head>
          <title>Random Cats API</title>
          <meta name="description" content="The Random Cat Images API." />
          <link rel="icon" href="/cats/cat1.png" />
        </Head>
        <main className={styles.main}>
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
            
            <div className={styles.grid}>
              <div className={styles.card}>
                <h2>The Random Cat Images API</h2>
                <a href="https://cat-api-jet.vercel.app/api/cat" className={styles.linkcard}>
                  <p>Click Me</p>
                </a>
              </div>
           </div>
          
        </main>
      </div>
    </div>
  );
}

export default Home;
