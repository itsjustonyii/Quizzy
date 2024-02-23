// Leaderboard.js
import {useEffect} from 'react';
import styles from './leaderboard.module.css'

function Leaderboard( {highScores, setHighScores } ) {
  useEffect(() => {
    const storedHighScores = JSON.parse(localStorage.getItem('highScores')) || [];
    setHighScores(storedHighScores);
}, []);

const top10HighScores = highScores.slice(0, 40);

  return (
    <div className= {styles.overall}>
 
      {top10HighScores.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>Ranking</th>
                            <th>Name</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {top10HighScores.map((highScore, i) => {
                            return (
                                <tr key={i}>
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
