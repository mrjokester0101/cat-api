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
                <h2>The API</h2>
                <a href="https://discord.com/oauth2/authorize?client_id=1251525661185806336&permissions=8&integration_type=0&scope=bot" className={styles.linkcard}>
                  <p>Get Invite</p>
                </a>
              </div>
           </div>
          
        </main>
      </div>
    </div>
  );
}

export default Home;
