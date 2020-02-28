import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

import NumberBox from '../components/NumberBox';
import Block from '../components/Block';

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
    const [currentGuess, setCurrentGuess] = useState(
        generateRandomGuess(1, 100, props.userChoice)
    );
    const [rounds, setRounds] = useState(0);

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(rounds);
        }
    }, [currentGuess, userChoice, onGameOver]);

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < props.userChoice)
        || (direction === 'higher' && currentGuess > props.userChoice)) {
            Alert.alert("No cheating!", "Are you sure that's correct?", [
                { text: "Sorry!", style: "cancel" }
            ]);
            return;
        }
        direction === 'lower'
        ? currentHigh.current = currentGuess
        : currentLow.current = currentGuess;
        const nextNumber =  generateRandomGuess(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(rounds => rounds + 1);
    };

    return (
        <View style={styles.screen}>
            <Text>Computer's Guess</Text>
            <NumberBox>{currentGuess}</NumberBox>
            <Block style={styles.buttonContainer}>
                <Button title="LOWER" onPress={nextGuessHandler.bind(this, 'lower')} />
                <Button title="HIGHER" onPress={nextGuessHandler.bind(this, 'higher')} />
            </Block>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        marginTop: '30%'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
});

export default GameActiveScreen;