import React from 'react';
import dynamic from 'next/dynamic';
import styles from '/styles/Quiz.module.css';
import { useRouter } from 'next/router';
import NavBar from '@/components/NavigationBar';
import Head from 'next/head';

const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: require('/public/animations/rotating_logo.json'),
};


export default function Quiz() {
  const router = useRouter();

  const navigateToQuizOne = () => {
    router.push('./ParentOne');
  };

  return (
    <>
      <Head>
        <title>GROOVE - TUNEBOX</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.mainContainer}>
        <div className={styles.parentContainer}>
          <div className={styles.groove}><h1>GROOVE</h1></div>
          <header className={styles.header}>
            <div className={styles.logo}>
              <Lottie options={defaultOptions} height={280} width={280} />
            </div>
          </header>
          <div className={styles.test}>
            <h2 className={styles.welcome}>Welcome to Tunebox!</h2>
            <p className={styles.text}>Tunebox is your musical compass, guiding you to the perfect playlist that resonates with your current mood. Personalized playlists that hit all the right notes.</p>
            <button 
              className={styles.start} 
              tabIndex="1"
              onClick={navigateToQuizOne}>
                Get Started
            </button>
          </div>
          <div className={styles.navBar}><NavBar tabIndex="2"/></div>
        </div>
      </main>
    </>
  );
}
