import React, {Component} from 'react';
import { View, TextInput, TouchableHighlight, Alert, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import {Text} from '../customComponents/Components.js';
import colors from '../../constants/Colors.js';
import { connect } from 'react-redux';

class CatWeight extends Component {
    state = {
        text: ''
    }
    handlePress = ()=>{
        const {text} = this.state;
        const reg = /^[0-9]*$/gm;
        if (reg.test(text) && text.length!==0) {
            console.log(parseInt(text))
            this.props.action.bind({catWeight: parseInt(text)});
            Alert.alert(`Wartość: ${text} dodano`)
        } 
    }
    render() {
        console.log(this.props.aaa)
        return(
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    <Text text={this.props.label}/>  
                    <View style={styles.innerContainer}>
                        <TextInput 
                        onChangeText={(text) => this.setState({text})}
                        keyboardType='numeric'
                        style={styles.input}
                        />
                        <TouchableHighlight
                        style={styles.add}
                        onPress={this.handlePress}
                        underlayColor={colors.grey}
                        >
                            <Entypo 
                            name='add-to-list'
                            size={30}
                            />
                        </TouchableHighlight>
                    </View>                                 
                </View>
            </View>
            
        )
    }
}



const styles =  StyleSheet.create({
    wrapper: {
        padding: 15,
        borderBottomColor: colors.mediumGrey,
        borderBottomWidth: 1,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: 50,
        marginTop: 7,
        borderWidth: 1,        
        padding: 5,
        borderRadius: 3,
        textAlign: 'center',
        borderColor: colors.green
    },
    innerContainer: {
        flex: -1,
        flexDirection: 'row'
    },
    add: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: 20,
        width: 50,
        padding: 5,
        borderRadius: 7
    }
});

const mapStateToProps = (state)=>{
    return {
        aaa: state
    }
}

export default connect(mapStateToProps, null)(CatWeight);