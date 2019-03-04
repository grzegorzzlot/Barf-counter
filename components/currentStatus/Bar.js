import React, {Component} from 'react';
import { View, Image, StyleSheet } from 'react-native';
import colors from '../../constants/Colors';
import ModalContainer from './recipeList/Modal';
import ProgressContainer from './progress/ProgressContainer';
import logo from '../../assets/icon.png';

class Bar extends Component {
    render() {
        return(
            <View style={styles.container}>
                <ProgressContainer/>
                <Image
                style={{width: 30, height: 30}}
                source={logo}
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