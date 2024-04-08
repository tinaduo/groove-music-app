import React from 'react';
import LottiePlayer from '@/components/LottiePlayer';
import styles from '@/styles/ChildTwo.module.css'

export default function ChildTwo({ result, lottiePath, buttonLink }) {
  return (
    <div className={styles.result}>
      <h3>{result}</h3>
      <div className={styles.test}><LottiePlayer animationPath={lottiePath} width={290} height={290}/></div>
      {buttonLink && ( 
        <a href={buttonLink} target="_blank" rel="noopener noreferrer" style={{ marginTop: '10px' }}>
          <button type="button" className={styles.spotify}>Listen on Spotify</button>
        </a>
      )}
    </div>
  );
}
