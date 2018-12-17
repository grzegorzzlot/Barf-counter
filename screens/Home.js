import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import Hamburger from 'react-native-vector-icons/FontAwesome';
import colors from '../constants/Colors.js';
import InitialHome from '../components/Home/initialHome.js'

class Home extends Component {
    handleHamburger = ()=>{
        this.props.navigation.openDrawer();
    }
    render() {
        return ( 
            <View>
                <View style={styles.statusBar}></View>
                <View style={styles.bar}>
                    <TouchableOpacity style={styles.touch} onPress={this.handleHamburger}>
                        <Hamburger                        
                        name='bars'
                        color='#999'
                        size={28}/>
                    </TouchableOpacity>                    
                </View>
                <InitialHome />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bar: {
        flex: -1,  
        flexDirection: 'row',
        borderColor: '#ccc',
        borderWidth: 1        
    },
    touch: {
        padding: 12
    },
    statusBar: {
        backgroundColor: colors.green,
        height: Constants.statusBarHeight,
    },
});

export default Home;