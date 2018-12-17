import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import colors from '../../constants/Colors.js';

class StepOne extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Podaj masę kota</Text>
                <TextInput style={styles.input}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15
    }, 
    text: {
        marginBottom: 10,
    },
    input: {
        borderColor: colors.green,
        padding: 10,
        borderWidth: 1,
        borderRadius: 4
    }
})

export default StepOne;