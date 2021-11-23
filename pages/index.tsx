import type { NextPage } from 'next';
import Head from 'next/head';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Boombox | Listen music from every platform you like</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header mix={styles.header} />

      <main className={styles.main}>
          Welcome to <a href="https://nextjs.org">Boombox</a>
      </main>

      <Footer mix={styles.footer} />
    </div>
  );
};

export default Home;
