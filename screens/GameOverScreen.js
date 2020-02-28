import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import DefaultStyles from '../constants/defaultStyles';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={DefaultStyles.title}>GAME OVER!</Text>
            <Text style={DefaultStyles.bodyText, styles.centralText}>The computer took {props.roundNumber} rounds</Text>
            <Button title="Play again?" onPress={props.onRestartGame} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centralText: {
        paddingVertical: 30
    }
});

export default GameOverScreen;