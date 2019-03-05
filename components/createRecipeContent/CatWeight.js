import React, {Component} from 'react';
import { View, TextInput, TouchableHighlight, Alert, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import {Text} from '../customComponents/Components.js';
import colors from '../../constants/Colors.js';
import { connect } from 'react-redux';
import {getCatWeight} from '../../actions/index.js';

class CatWeight extends Component {
    state = {
        text: ''
    }
    handlePress = ()=>{
        const {text} = this.state;
        let val;
        text.match(',')? val = text.replace(',','.') : val = text;
        
        //float regexp
        const reg = /^[+-]?([0-9]*[.])?[0-9]+$/gm;        
        if (reg.test(val) && val.length!==0) {           
            this.props.getCatWeight(parseFloat(val));
            Alert.alert(`Ustalono wagę kota na: ${val.toString().replace('.',',')} kg`)
        } 
    }
    render() {
        let selected = this.props.data.catWeight.catWeight;
        return(
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    <Text text={this.props.label}/>  
                    <View style={styles.innerContainer}>
                        <TextInput 
                        onChangeText={(text) => this.setState({text})}
                        keyboardType='numeric'
                        style={styles.input}
                        placeholder='Waga'
                        />
                        <TouchableHighlight
                        style={styles.add}
                        onPress={this.handlePress}
                        underlayColor={colors.grey}
                        >
                            <Entypo 
                            name='add-to-list'
                            size={20}
                            />
                        </TouchableHighlight>
                    </View>                                 
                </View>
                {selected!==0? <Text text={`Aktualna wartość: ${selected.toString().replace('.',',')} kg`} fontWeight='700' /> : null}
                
            </View>
            
        )
    }
}



const styles =  StyleSheet.create({
    wrapper: {
        padding: 10,
    },
    container: {
        flex: 1,
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 13,
        backgroundColor: colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 1,
    },
    input: {
        width: 50,
        borderBottomWidth: 1,        
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

const mapDispatchToProps = { getCatWeight }

const mapStateToProps = (state)=>{
    return {
        data: state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatWeight);