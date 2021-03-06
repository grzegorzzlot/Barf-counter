import React, {Component} from 'react';
import { View, Picker, TextInput, TouchableHighlight, Alert, StyleSheet } from 'react-native';
import {Text} from '../customComponents/Components.js';
import colors from '../../constants/Colors.js';
import { Entypo } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { addStandardValue } from '../../actions/index.js';

class StandardInput extends Component {
    state = {
        data: [],
        valuePicker: 'Wybierz wartość',
        valueInput: '',
        isWalid: false,
        category: '',
        typ: ''
    }
    componentDidMount() {
        const { data, typ, category } = this.props;
        let arr = [];
        data.forEach(i => {
            if(i["Typ"]===typ) {
                arr.push(i);
            }
        });
        this.setState({data: arr, category: category, typ: typ})
    }
    componentDidUpdate(prevProps, prevState) {
        const {valueInput, valuePicker} = this.state;
        const reg = /^[0-9]*$/gm;
        if(prevState.valuePicker!==valuePicker || prevState.valueInput!==valueInput) {
            let validateInput = reg.test(valueInput);
            if(validateInput && valueInput.length>0 && valuePicker!=='Wybierz wartość') {
                this.setState({isWalid: true});
            } else {
                this.setState({isWalid: false});
            }
        }
    }
    onValueChange = (valuePicker)=>{
        this.setState({valuePicker: valuePicker})
    }
    inputChange = (valueInput)=>{
        this.setState({valueInput: valueInput})
    }
    handlePress = ()=>{
        const {valuePicker, valueInput, isWalid, category, typ} = this.state;
        if (isWalid) {
            this.props.addStandardValue({
                label:valuePicker,
                value: valueInput,
                category: category,
                typ: typ
            })
            Alert.alert(`Dodano: ${valuePicker} - ${valueInput}g`)
        }        
    }
    render() {
        const { data, typ } = this.state;
        const items = data.map((i,index)=>
            <Picker.Item key={index}
            label={i["Wartości żywieniowe na 100g żywności"]} 
            value={i["Wartości żywieniowe na 100g żywności"]} 
            color={colors.green}/>
        )
        return(
            <View style={styles.pickerContainer}>
                <Text text={typ} />
                <View style={styles.inner}>
                    <Picker
                    style={styles.picker}
                    selectedValue={this.state.valuePicker}
                    onValueChange={this.onValueChange}
                    >   
                        <Picker.Item
                        label='Wybierz wartość' 
                        value='Wybierz wartość' 
                        color={colors.red}
                        />
                        {items}
                    </Picker>
                    <TextInput
                    onChangeText={this.inputChange}
                    keyboardType='numeric'
                    value={this.state.valueInput} 
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
        )
    }   
}


const styles = StyleSheet.create({  
    pickerContainer: { 
        backgroundColor: colors.white,       
        padding: 15,
        borderBottomColor: colors.mediumGrey,
        borderBottomWidth: 1
    },
    inner: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    picker: {
        flex: 1,
        height: 20      
    },
    input: {
        width: 50,
        borderBottomWidth: 1,        
        textAlign: 'center',
        borderColor: colors.green
    },
    inputValid: {
        borderColor: colors.green,
    },
    inputInvalid: {
        borderColor: colors.red,
    },
    add: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: 20,
        width: 50,
        padding: 5,
        borderRadius: 7
    }
})

const mapDispatchToProps = {addStandardValue}

export default connect(null, mapDispatchToProps)(StandardInput);
