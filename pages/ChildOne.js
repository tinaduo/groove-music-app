import { useState } from 'react';
import styles from '@/styles/ChildOne.module.css';
import NavBar from '@/components/NavigationBar';

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
    <>
    <main className={styles.parentContainer}>
      <div className={styles.answersContainer}>
        <div className={styles.question}><h3>{decisionData.question}</h3></div>
        {Object.entries(decisionData.options).map(([option, _]) => (
          <button key={option} onClick={() => setSelection(option)} className={styles.answerButton}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
        <div className={styles.navContainer}>
          {onPrevious && <button onClick={onPrevious} className={styles.submitButton}>
            <svg className={styles.backArrow} width="25" height="16" viewBox="0 0 25 16" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 9C24.5523 9 25 8.55228 25 8C25 7.44772 24.5523 7 24 7L24 9ZM0.292892 7.2929C-0.0976315 7.68342 -0.0976314 8.31658 0.292893 8.70711L6.65686 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928934C7.68054 0.538409 7.04738 0.538409 6.65685 0.928934L0.292892 7.2929ZM24 7L1 7L1 9L24 9L24 7Z" fill="white"/>
            </svg>
            Back
          </button>}
          <button onClick={handleNext} className={styles.submitButton}>
            Next
            <svg className={styles.nextArrow} width="25" height="16" viewBox="0 0 201 170" xmlns="http://www.w3.org/2000/svg">
            <path d="M196.49 93.4898L124.49 165.49C122.236 167.744 119.178 169.011 115.99 169.011C112.802 169.011 109.744 167.744 107.49 165.49C105.236 163.235 103.969 160.178 103.969 156.99C103.969 153.802 105.236 150.744 107.49 148.49L159 96.9998H12C8.8174 96.9998 5.76516 95.7355 3.51472 93.4851C1.26428 91.2346 0 88.1824 0 84.9998C0 81.8172 1.26428 78.7649 3.51472 76.5145C5.76516 74.2641 8.8174 72.9998 12 72.9998H159L107.51 21.4798C105.256 19.2255 103.989 16.1679 103.989 12.9798C103.989 9.79168 105.256 6.73414 107.51 4.4798C109.764 2.22546 112.822 0.958984 116.01 0.958984C119.198 0.958984 122.256 2.22546 124.51 4.4798L196.51 76.4798C197.629 77.5961 198.516 78.9225 199.121 80.3828C199.726 81.843 200.036 83.4084 200.034 84.989C200.033 86.5695 199.719 88.1341 199.11 89.593C198.502 91.0518 197.612 92.3761 196.49 93.4898Z"/>
            </svg>
        </button>
        </div>
      <div className={styles.navBar}><NavBar/></div>
      </div>
    </main>
    </>
  );
}
