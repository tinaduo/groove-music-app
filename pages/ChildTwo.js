import React from 'react';
import LottiePlayer from '@/components/LottiePlayer';
import styles from '@/styles/ChildTwo.module.css';
import dynamic from 'next/dynamic';


const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: require('/public/animations/rotating_logo.json'),
};

export default function ChildTwo({ result, lottiePath, buttonLink, chip}) {
  return (
    <div className={styles.result}>
      <h3>your groove today is...</h3>
      <div className={styles.pills}>
        {chip && chip.map((chipType) => (
        <span key={chipType} className={`${styles.chip} ${styles[chipType]}`}>{chipType}</span>
        ))}
      </div>
      <div className={styles.test}>
        <div className={styles.character}>
          <LottiePlayer animationPath={lottiePath} width={290} height={480}/>
        </div>
        <div className={styles.logo}>
          <Lottie options={defaultOptions} height={300} width={300}/>
        </div>
      </div>
      <div className={styles.groove}>
        <h2>{result}</h2>
      </div>
      {buttonLink && ( 
        <a href={buttonLink} target="_blank" rel="noopener noreferrer">
          <button type="button" className={styles.spotify}>Listen on Spotify</button>
        </a>
      )}
    </div>
  );
}
