import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import colors from '../../constants/Colors.js';
import ModalContent from './ModalContent.js';

class InitialHome extends Component {
    state = {
        counter: 0
    }
    handleIncrement = ()=>{
        this.setState({counter: this.state.counter+1});
    }
    handleDecrement = ()=>{
        this.setState({counter: this.state.counter-1});
    }
    render() {
        const {counter} = this.state;
        return( 
            <View style={styles.container}>
                <ModalContent data={counter}/>
                {counter===0?<Button title="Stwórz nowy przepis" onPress={this.handleIncrement}/>
                :<View style={styles.buttonContainer}>
                    <Button title="Wstecz" color={colors.green} onPress={this.handleDecrement}/>
                    <Button title="Dalej" color={colors.green} onPress={this.handleIncrement}/>
                </View>}
            </View>
        )
    }    
}

const styles = StyleSheet.create({
    container: {
        flex: -1,
        justifyContent: 'center'
    },
    buttonContainer: {
        padding: 15,
        flex: -1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default InitialHome;