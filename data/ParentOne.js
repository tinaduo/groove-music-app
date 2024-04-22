import { useState } from 'react';
import ChildOne from './ChildOne.js';
import ChildTwo from './ChildTwo';
import quizData from './QuizData';
import ProgressBar from '@/components/ProgressBar';

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
         {currentNode.type !== 'result' && ( <ProgressBar progress={Math.round(currentProgress)}/>)}
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
  