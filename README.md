https://opentdb.com/api.php?amount=20&category=9&type=multiple


() => {
    const storedHighScores = JSON.parse(localStorage.getItem('highScores')) || [];
    return storedHighScores;
  });