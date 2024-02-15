// Leaderboard.js
import {useEffect} from 'react';
import styles from './leaderboard.module.css'

function Leaderboard( {highScores, setHighScores, score} ) {
  useEffect(() => {
    const storedHighScores = JSON.parse(localStorage.getItem('highScores')) || [];
    setHighScores(storedHighScores);
}, []);

  return (
    <div className= {styles.overall}>
      <p>{score}</p>
      {highScores.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>Ranking</th>
                            <th>Name</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {highScores.map((highScore, i) => {
                            return (
                                <tr key={`${highScore.score}&{highScore.name}&{i}`}>
                                    <td>{i + 1}</td>
                                    <td>{highScore.name}</td>
                                    <td>{highScore.score}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            )}
    </div>
  );
}

export default Leaderboard;
