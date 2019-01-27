import React, {Component} from 'react';
import { View, Picker, TextInput, StyleSheet } from 'react-native';
import {Text} from '../../customComponents/Components.js';
import {connect} from 'react-redux';
import colors from '../../../constants/Colors.js';
import {getPodroby} from '../../../actions/index.js';

class Podroby extends Component {
    state = {
        value: 'Wybierz wartość'
    }
    valueChangeHandler = (itemValue)=>{
        const {params} = this.props;
        params.forEach(i => {
            if(i["Wartości żywieniowe na 100g żywności"]===itemValue) {
                this.props.getPodroby(i)
            }    
        });
        this.setState({value: itemValue});
    }
    render() {
        const {params} = this.props;
        const items = params.map((i,index)=>
            <Picker.Item key={index}
            label={i["Wartości żywieniowe na 100g żywności"]} 
            value={i["Wartości żywieniowe na 100g żywności"]} />
        )
        return(
            <View style={styles.container}>
                <Text text='Podroby' fontFamily='product-sans-bold'/>
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
                    style={styles.input} />
                </View>                
            </View>
        )
    }
}

const mapDispatchToProps = {getPodroby}

const styles = StyleSheet.create({  
    container: {
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15 
    },
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
        borderColor: colors.green
    }
})


export default connect(null, mapDispatchToProps)(Podroby);