import { useState } from 'react';
import styles from '@/styles/ChildOne.module.css';

export default function ChildOne({ decisionData, onDecision, onPrevious }) {
  const [selection, setSelection] = useState(null);

  const handleNext = () => {
    if (selection) {
      onDecision(decisionData.options[selection]);
    }
  };

  if (!decisionData) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.parentContainer}>
      <div className={styles.answersContainer}>
        <div className={styles.question}><h3>{decisionData.question}</h3></div>
        {Object.entries(decisionData.options).map(([option, _]) => (
          <button key={option} onClick={() => setSelection(option)} className={styles.answerButton}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>
      <div className={styles.navContainer}>
        {onPrevious && <button onClick={onPrevious} className={styles.submitButton}>Previous</button>}
        <button onClick={handleNext} className={styles.submitButton}>
          Next
        </button>
      </div>
    </div>
  );
}
