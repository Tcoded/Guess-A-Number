import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from './components/Header';
import GameStartScreen from './screens/GameStartScreen';
import GameActiveScreen from './screens/GameActiveScreen';
import GameOverScreen from './screens/GameOverScreen';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [roundNumber, setRoundNumber] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setDataLoaded(true)} />;
  }

  const restartGameHandler = () => {
    setRoundNumber(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setRoundNumber(0);
  };

  const endGameHandler = (numberOfRounds) => {
    setRoundNumber(numberOfRounds);
  };

  let content = <GameStartScreen onGameStart={startGameHandler} />;

  content = <GameOverScreen roundNumber={1} onRestartGame={restartGameHandler} />;

  if (userNumber && roundNumber === 0) {
    content = <GameActiveScreen userChoice={userNumber} onGameOver={endGameHandler} />;
  } else if (roundNumber > 0) {
    content = <GameOverScreen roundNumber={roundNumber} onRestartGame={restartGameHandler} />;
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
