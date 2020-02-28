import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import DefaultStyles from '../constants/defaultStyles';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={DefaultStyles.title}>GAME OVER!</Text>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/game-end.png')} style={styles.image} />
            </View>
            <Text style={DefaultStyles.bodyText, styles.centralText}>The computer took {props.roundNumber} round(s)</Text>
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
        paddingVertical: 20
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    }
});

export default GameOverScreen;