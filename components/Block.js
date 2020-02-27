import React from 'react';
import { View, StyleSheet } from 'react-native';

const Block = props => {
    return (
        <View style={{...styles.block, ...props.style}}>{props.children}</View>
    );
};

const styles = StyleSheet.create({
    block: {
        padding: 20,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
        backgroundColor: 'white',
        elevation: 5
    }
});

export default Block;