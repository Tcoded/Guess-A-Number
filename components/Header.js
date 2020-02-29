import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

import Colors from '../constants/Colors';
import DefaultStyles from '../constants/defaultStyles';

const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={DefaultStyles.title}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 35,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Header;