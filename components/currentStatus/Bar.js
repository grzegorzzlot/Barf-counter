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
                <View style={styles.inner}>
                    <ProgressContainer/>
                    <Image
                    style={{width: 30, height: 30}}
                    source={logo}
                    />
                    <ModalContainer />
                </View>
                                                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
        paddingBottom: 25,
        paddingLeft: 10,
        paddingRight: 10,
    }, 
    inner: {
        flex: -1,
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 13,
        backgroundColor: colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    }
})

export default Bar;