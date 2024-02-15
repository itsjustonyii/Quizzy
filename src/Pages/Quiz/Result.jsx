import React, { useState, useEffect } from 'react';
import styles from './quiz.module.css';

function Result({ score, comment, correctAnswers, handleTryAgain }) {
    

    

    

    return (
        <>
            <div className={styles.result}>
                <h2>Your Result</h2>
             <p>You scored <span>{score}</span></p>
                <p>You got a total of <span className={styles.s}>{correctAnswers}</span> question(s) right</p>
                <p>{comment(score)}</p>
                <button className={styles.btn}
                onClick={handleTryAgain}>Try Again</button>
            </div>
        </>
    );
}

export default Result;
