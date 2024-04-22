import { useState } from 'react';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';
import quizData from './QuizData';
import ProgressBar from '@/components/ProgressBar';
import styles from '@/styles/ParentOne.module.css';


export default function ParentOne() {
    const [currentId, setCurrentId] = useState('start');
    const [path, setPath] = useState([currentId]);
  
    const totalSteps = Object.keys(quizData).length; 
    let currentProgress = (path.length / (totalSteps + 1)) * 240;
  
    const handleDecision = (nextId) => {
      if (quizData[nextId]) {
        setCurrentId(nextId);
        setPath(prevPath => [...prevPath, nextId]);
      } else {
        console.error('Selected option does not have a corresponding nextId in quizData');
      }
    };
  
    const handlePrevious = () => {
      if (path.length > 1) {
        const newPath = path.slice(0, -1);
        setCurrentId(newPath[newPath.length - 1]);
        setPath(newPath);
      }
    };

    const isFirstQuestion = currentId === 'start'; 

  
    const currentNode = quizData[currentId];
  
    if (!currentNode) {
      console.error(`No node found for id: ${currentId}`);
      return <div>No content available.</div>;
    }
  
    return (
      <>
      <main className={styles.container}>
        <div className={styles.title}>
          <h1>Groove</h1>
          <h2>Tunebox</h2>
        </div>
         <div className={styles.bar}>{currentNode.type !== 'result' && ( <ProgressBar progress={Math.round(currentProgress)}/>)}</div>
      </main>
         {currentNode.type === 'decision' && (
         <ChildOne
          decisionData={currentNode}
          onDecision={handleDecision}
          onPrevious={handlePrevious}
          isFirst={isFirstQuestion}
         />
        )}
        {currentNode.type === 'result' && (
          <ChildTwo result={currentNode.result} lottiePath={currentNode.lottiePath} buttonLink={currentNode.buttonLink} chip={currentNode.chip}/>
        )}
      </>
    );
  }
  