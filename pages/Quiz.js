import React from 'react';
import dynamic from 'next/dynamic';
import styles from '/styles/Quiz.module.css';
import { useRouter } from 'next/router';
import NavBar from '@/components/NavigationBar';

const Lottie = dynamic(() => import('react-lottie'), {
  ssr: false,
});

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: require('/public/animations/rotating_logo.json'),
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};



export default function Quiz() {
    const router = useRouter();

  const navigateToQuizOne = () => {
    router.push('./ParentOne');
  };

  return (
    <>
    <main className={styles.parentContainer}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Lottie options={defaultOptions} height={313} width={313}/>
        </div>
      </header>
      <div className={styles.test}>
        <h2 className={styles.welcome}>Welcome to Tunebox!</h2>
        <p className={styles.text}>Tunebox is your musical compass, guiding you to the perfect playlist that resonates with your current mood. Personalized playlists that hit all the right notes.</p>
        <button className={styles.start} onClick={navigateToQuizOne}>Get Started</button>
      </div>
    </main>
    <div className={styles.navBar}><NavBar/></div>
    </>
  );
}
