import React, {Component} from 'react';
import { View, Picker, TextInput, StyleSheet } from 'react-native';
import {Text} from '../customComponents/Components.js';
import colors from '../../constants/Colors.js';
import initialStateMieso from '../../constants/initialStateMieso.js';

class Kosci extends Component {
    state = {
        value: 'Wybierz wartość',
        selectValue: initialStateMieso,
        inputValue: 0,
        valid: true
    }
    valueChangeHandler = (itemValue)=>{
        const {params} = this.props;
        params.forEach(i => {            
            if(i["Wartości żywieniowe na 100g żywności"]===itemValue) {
                let obj = Object.assign({}, i);
                delete obj["Źródło"];
                delete obj["Wartości żywieniowe na 100g żywności"];
                delete obj["Typ"];
                this.setState({selectValue: obj});
            }  
        });
        if(itemValue===0) {
            this.setState({selectValue: initialStateMieso});
        }

        this.setState({value: itemValue});
    }
    inputHandler = (inputValue)=>{
        const reg = /^[0-9]*$/gm;
        if (reg.test(inputValue) && inputValue.length!==0) {
            this.setState({valid: true, inputValue: parseInt(inputValue)});
        } else {
            this.setState({valid: false, inputValue: 0})
        }
    }
    componentDidMount() {
        //ta wartość do stora
        this.props.doAction(initialStateMieso);
    }
    componentDidUpdate() {
        const {inputValue, selectValue} = this.state;
        let dataToStore = Object.assign({}, selectValue)
        for(i in dataToStore) {
            dataToStore[i] *=inputValue; 
        }
        //ta wartość do stora
        this.props.doAction(dataToStore);
    }
    render() {
        const {valid} = this.state;
        const {params} = this.props;
        const items = params.map((i,index)=>
            <Picker.Item key={index}
            label={i["Wartości żywieniowe na 100g żywności"]} 
            value={i["Wartości żywieniowe na 100g żywności"]} />
        )
        return(
            <View>
                <View style={styles.pickerContainer}>
                    <Picker 
                    style={styles.picker}
                    selectedValue={this.state.value}
                    onValueChange={this.valueChangeHandler}>
                    <Picker.Item
                    label= 'Wybierz wartość'
                    value={0} />
                    {items}    
                    </Picker>
                    <TextInput
                    style={[styles.input, valid?styles.inputValid:styles.inputInvalid]} 
                    onChangeText={(inputValue)=>this.inputHandler(inputValue)}/>
                </View>
                {valid?
                null
                :<Text text='Powyższe pole musi zawierać liczbę!' color={colors.red} />}  
            </View>
                            
        )
    }
}


const styles = StyleSheet.create({  
    pickerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5,
    },
    picker: {
        flex: 1,
        height: 20      
    },
    input: {
        width: 50,
        padding: 5,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: colors.green,
        textAlign: 'center'
    },
    inputValid: {
        borderColor: colors.green,
    },
    inputInvalid: {
        borderColor: colors.red,
    }
})

export default Kosci;
