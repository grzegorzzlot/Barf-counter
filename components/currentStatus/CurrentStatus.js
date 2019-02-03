import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../../constants/Colors.js';
import {Constants} from 'expo';
import Progress from './Progress.js';
import Bar from './Bar.js';


class CurrentStatus extends Component {


    render() {
        return(
            <View style={styles.container}>
                <View style={styles.statusBar}></View>
                <Bar />
                <Progress />
            </View>
        )
    }
}



const styles =  StyleSheet.create({
    container: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: colors.grey
    },
    statusBar: {
        height: Constants.statusBarHeight,
        backgroundColor: colors.green
    }
})






export default CurrentStatus;