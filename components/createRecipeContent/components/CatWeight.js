import React, {Component} from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import {Text} from '../../customComponents/Components.js';
import colors from '../../../constants/Colors.js';
import {getCatWeight} from '../../../actions/index.js';
import {connect} from 'react-redux';

class CatWeight extends Component {
    state = {valid: true}
    onChangeHandle = (text)=>{
        const reg = /^[0-9]*$/gm;
        if (reg.test(text) && text.length!==0) {
            this.props.getCatWeight(parseInt(text));
            this.setState({valid: true});
        } else {
            this.props.getCatWeight(0);
            this.setState({valid: false})
        }        
    }
    render() {
        const {valid} = this.state;
        return(
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    <Text text='Waga kota w kilogramach:'/>              
                    <TextInput 
                    onChangeText={(text)=>this.onChangeHandle(text)}
                    style={[styles.input, valid?styles.inputValid:styles.inputInvalid]}
                    />
                </View>
                {valid?
                null
                :<Text text='Powyższe pole musi zawierać liczbę!' color={colors.red} />}
            </View>
            
        )
    }
}

const mapDispatchToProps = {getCatWeight}

const styles =  StyleSheet.create({
    wrapper: {
        padding: 15
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
        textAlign: 'center'
    },
    inputValid: {
        borderColor: colors.green,
    },
    inputInvalid: {
        borderColor: colors.red,
    }
});

export default connect(null, mapDispatchToProps)(CatWeight);