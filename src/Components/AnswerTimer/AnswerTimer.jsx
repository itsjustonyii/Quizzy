import { useEffect, useState, useRef } from 'react'
import styles from './answertimer.module.css'

function AnswerTimer({ onTimeOut }) {
    const [counter, setCounter] = useState(0);
    const [progress, setProgress] = useState(0);
    const intervalRef = useRef();
    const duration = 7;
   useEffect(() => {
    intervalRef.current = setInterval (() => {
    setCounter((cur) => cur + 1)
    }, 1000)

    return () => clearInterval(intervalRef.current);
   }, []);

   useEffect(() => {
      setProgress(100*(counter/duration));
    if (counter === duration) {
        clearInterval(intervalRef.current);
        setTimeout(() => {
            onTimeOut();
           }, 1000)
    } 
   }, [counter]);

  return (
    <div className={styles.timer}>
     <div className={styles.progress}
     style={{width: `${progress}%`,
     backgroundColor: `${
        progress < 40 ? 'lightgreen'
        : progress < 70 ? 'orange'
        :'red'
     }`}}></div>   
    </div>
  )
}

export default AnswerTimer;