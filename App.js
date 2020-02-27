import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import GameStartScreen from './screens/GameStartScreen';
import GameActiveScreen from './screens/GameActiveScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [roundNumber, setRoundNumber] = useState(0);

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setRoundNumber(0);
  };

  const endGameHandler = (numberOfRounds) => {
    setRoundNumber(numberOfRounds);
  };

  let content = <GameStartScreen onGameStart={startGameHandler} />;

  if (userNumber && roundNumber === 0) {
    content = <GameActiveScreen userChoice={userNumber} onGameOver={endGameHandler} />;
  } else if (roundNumber > 0) {
    content = <GameOverScreen roundNumber={roundNumber} />;
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess A Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
