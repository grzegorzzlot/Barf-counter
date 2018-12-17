import React, { Component } from 'react';
import { View, Text, Picker, TextInput, StyleSheet } from 'react-native';
import colors from '../../constants/Colors.js';
import data from '../../constants/data/mieso.js'

class StepTwo extends Component {
    state = {
        mieso: [],
        selectedMieso:'',
        serca: [],
        selectedSerca: '',
        zoladki: [],
        inne_podroby: [],
        kosci: []
    }
    handleMieso = (typ)=>{
        const varName = [];
        data.forEach((i)=>{
            if(i["Typ"]===typ) {
                varName.push(i);
            }
        });
        return varName;
    }
    componentDidMount() { 
        const mieso = this.handleMieso("mieso"); 
        this.setState({mieso: mieso});
        const serca = this.handleMieso("serce"); 
        this.setState({serca: serca});     
    }
    render() {
        const { mieso, selectedMieso, serca, selectedSerca, zoladki, inne_podroby, kosci } = this.state;
        return(
            <View>


                <Text>Mięso</Text>
                <Picker
                selectedValue={this.state.selectedMieso}
                onValueChange={(value) => this.setState({selectedMieso: value})}>
                <Picker.Item label="--- Wybierz z listy poniżej ---" value="--- Wybierz z listy poniżej ---" />
                {mieso.map((i, index)=> 
                    <Picker.Item  
                    key={index} 
                    label={i["Wartości żywieniowe na 100g żywności"]} 
                    value={i["Wartości żywieniowe na 100g żywności"]}/>
                )}
                </Picker>
                {selectedMieso===""||selectedMieso==="--- Wybierz z listy poniżej ---"?
                null:
                <TextInput style={{borderColor: colors.green, borderWidth: 1}}/>
                }
                

                <Text>Serca</Text>
                <Picker
                selectedValue={this.state.selectedSerca}
                onValueChange={(value) => this.setState({selectedSerca: value})}>
                <Picker.Item label="--- Wybierz z listy poniżej ---" value="--- Wybierz z listy poniżej ---" />
                {serca.map((i, index)=> 
                    <Picker.Item  
                    key={index} 
                    label={i["Wartości żywieniowe na 100g żywności"]} 
                    value={i["Wartości żywieniowe na 100g żywności"]}/>
                )}
                </Picker>
            </View>
        )
    }
}

export default StepTwo;