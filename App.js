import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header'
import GameStartScreen from './screens/GameStartScreen'

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess A Number" />
      <GameStartScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
