import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const generateRandomGuess = (min, max, exclude) => {
    min = Math.ceil(min);
    max = ~~(max);
    const ranNum = ~~(Math.random() * (max - min)) + min;
    if (ranNum === exclude) {
        return generateRandomGuess(min, max, exclude);
    } else {
        return ranNum;
    }
};

const GameActiveScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomGuess(1, 100, props.userChoice)
    );
};

const styles = StyleSheet.create({});

export default GameActiveScreen;