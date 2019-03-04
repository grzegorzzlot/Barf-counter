import React, { Component } from 'react';
import { View, Button, Modal, TextInput, AsyncStorage, StyleSheet } from 'react-native'
import colors from '../../constants/Colors';
import { Text } from '../customComponents/Components';
import {connect} from 'react-redux';

class Submit extends Component {
    state = {
        modalVisible: false,
        text: ''
    }
    onPresshandle = ()=>{
        this.setState({modalVisible: true});
    }    
    handleClose = ()=>{
        this.setState({modalVisible: false, text: ''});
    }
    handleSubmit = ()=>{
        const {data} = this.props;
        console.log(data);
        this.setState({modalVisible: false});
    }
    render() {
        const {modalVisible, text} = this.state;
        return(
            <View style={styles.container}>
                <Button
                onPress={this.onPresshandle}
                title="Zapisz Przepis"
                color={colors.green}
                />
                <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={this.handleClose}
                >
                    <View style={styles.inner}>
                        <View style={styles.promptContainer}>
                            <View style={styles.header}>
                                <Text text='Zapisz przepis' fontWeight='700' fontSize={18} />
                            </View>
                            <View style={styles.content}>
                                <Text text='Podaj nazwę'/>
                                <TextInput 
                                style={styles.input}
                                value={text}
                                onChangeText={(text) => this.setState({text})}
                                />
                            </View>
                            <View style={styles.footer}>
                                <Button
                                onPress={this.handleClose}
                                title="Anuluj"
                                color={colors.red}
                                />
                                <Button
                                onPress={this.handleSubmit}
                                title="Zapisz"
                                color={colors.green}
                                />                                
                            </View>                            
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        marginBottom: 50,
        marginLeft: 15,
        marginRight: 15
    },
    inner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    promptContainer: {
        padding: 15,
        backgroundColor: '#fff',
        height: 230,
        width: 280
    },
    header: {
        marginBottom: 20
    },
    content: {

    },
    input: {
        width: '100%',
        borderBottomColor: colors.green,
        borderBottomWidth: 1,
        paddingTop: 6,
        paddingBottom: 3,
    },
    footer: {
        height: 50,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 90,
    },
    button: {
        marginLeft: 20
    }
});

const mapStateToProps = (state)=>{
    return {
        data: state
    }
}

export default connect(mapStateToProps, null)(Submit);

