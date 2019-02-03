import React, {Component} from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import {Foundation} from '@expo/vector-icons';
import colors from '../../constants/Colors';
import ModalContainer from './recipeList/Modal';

class Bar extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Foundation 
                name='results'
                size={30}
                />
                <ModalContainer />                                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: -1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        borderBottomWidth: 1,
        borderColor: colors.grey
    }
})

export default Bar;