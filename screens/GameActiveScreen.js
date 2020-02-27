import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

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
    const [currentGuess, setCurrentGuess] = useState(generateRandomGuess(1, 100, props.userChoice)
    );

    return (
        <View style={styles.screen}>
            <Text>Computer's Guess</Text>
            <NumberBox>{currentGuess}</NumberBox>
            <Block style={styles.buttonContainer}>
                <Button title="LOWER" />
                <Button title="HIGHER" />
            </Block>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
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