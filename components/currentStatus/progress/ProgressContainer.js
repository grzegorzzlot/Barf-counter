import React, {Component} from 'react';
import { View, ScrollView, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import {AntDesign, Foundation} from '@expo/vector-icons';
import colors from '../../../constants/Colors';
import Macro from './Macro.js';
import Micro from './Micro.js';

class ProgressContainer extends Component {
    state = {
        modalVisible: false,
    }
    handleOpen = ()=>{
        this.setState({modalVisible: true});
    }
    handleClose = ()=>{
        this.setState({modalVisible: false});
    }   
    render() {
        const {modalVisible} = this.state;
        return(
            <View>
                <TouchableOpacity
                onPress={this.handleOpen}
                >
                    <Foundation 
                    name='results'
                    size={30}
                    />
                </TouchableOpacity>
                <Modal
                visible={modalVisible}
                animationType='slide'
                onRequestClose={this.handleClose}
                >
                    <View style={styles.bar}>
                        <TouchableOpacity
                        onPress={this.handleClose}
                        >
                            <AntDesign 
                            name='close'
                            size={30}
                            />
                        </TouchableOpacity>                        
                    </View>
                    <ScrollView style={{flex:1}}>
                        <Macro/>
                        <Micro/>
                    </ScrollView>                   
                </Modal>
            </View>            
        )
    }
}

const styles = StyleSheet.create({
    bar: {
        flex: -1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 15,
        borderBottomWidth: 1,
        borderColor: colors.grey
    }
})

export default ProgressContainer;