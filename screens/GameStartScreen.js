import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    Button,
    Keyboard,
    Alert
} from 'react-native';

import Colors from '../constants/Colors'
import Input from '../components/Input'
import NumberBox from '../components/NumberBox';
import Block from '../components/Block';
import DefaultStyles from '../constants/defaultStyles';

const GameStartScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number!', 'Number has to be between 1 and 99',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            );
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    };

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = (
            <View style={styles.summaryContainer}>
                <Text>You selected:</Text>
                <NumberBox>{selectedNumber}</NumberBox>
                <Button title="START GAME" onPress={() => props.onGameStart(selectedNumber)} />
            </View>
        )
    };
    

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <Text style={styles.title, DefaultStyles.title}>Let's start a new game!</Text>
                <Block style={styles.inputContainer}>
                    <Text>Enter a number</Text>
                    <Input
                        style={styles.input}
                        blurOnSubmit
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType="number-pad"
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button
                                title="Reset"
                                onPress={resetInputHandler}
                                color={Colors.secondary}
                            />
                        </View>
                        <View style={styles.button}>
                            <Button
                                title="Confirm"
                                onPress={confirmInputHandler}
                                color={Colors.accent}
                            />
                        </View>
                    </View>
                </Block>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        marginTop: '30%'
    },
    title: {
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: 100
    },
    input: {
        width: 40,
        textAlign: 'center'
    },
    summaryContainer: {
        marginVertical: 20,
        alignItems: 'center'
    }
});

export default GameStartScreen;