// pages/Quiz.js
import React from 'react';
import dynamic from 'next/dynamic';
import styles from '/styles/Quiz.module.css';
import { useRouter } from 'next/router';
import NavBar from '@/components/NavigationBar';

// Import Lottie dynamically and set ssr to false

const Lottie = dynamic(() => import('react-lottie'), {
  ssr: false,
});

const defaultOptions = {
  loop: true,
  autoplay: true,
  // Make sure the path to your animation file is correct
  animationData: require('/public/animations/rotating_logo.json'),
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};



export default function Quiz() {
    const router = useRouter(); // Step 2: Initialize the router

  // Function to handle navigation
  const navigateToQuizOne = () => {
    router.push('./ParentOne'); // Step 3: Use router.push to navigate
  };

  return (
    <>
    <main className={styles.parentContainer}>
      <header className={styles.header}>
        <div className={styles.logo}>
          {/* Lottie component will now only be rendered on the client-side */}
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
