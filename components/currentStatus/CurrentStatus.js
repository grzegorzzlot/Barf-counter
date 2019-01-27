import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../../constants/Colors.js';
import {Constants} from 'expo';
import {connect} from 'react-redux';

class CurrentStatus extends Component {

    render() {
        // console.log(this.props)
        return(
            <View style={styles.container}>
                <View style={styles.statusBar}></View>
            </View>
        )
    }
}

const mapStateToProps = (state)=>{
    return { 
        waga: state.catWeight.catWeight,
        mieso: state.mieso.mieso,
        serca: state.serca.serca,
        zoladki: state.zoladki.zoladki,
        podroby: state.podroby.podroby,
        kosci: state.kosci.kosci
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

export default connect(mapStateToProps, null)(CurrentStatus);