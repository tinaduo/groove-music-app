import styles from './ProgressBar.module.css';

export default function ProgressBar({ progress }) {
    return (
      <div className={styles.progressBG}>
        <div style={{width:`${progress}%`}} className={styles.progressInner}></div>
      </div>
    );
  }
  