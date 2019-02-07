import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../../constants/Colors';
import ModalContainer from './recipeList/Modal';
import ProgressContainer from './progress/ProgressContainer';

class Bar extends Component {
    render() {
        return(
            <View style={styles.container}>
                <ProgressContainer/>
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