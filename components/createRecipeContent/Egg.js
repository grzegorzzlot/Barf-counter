import React, {Component} from 'react';
import { View, TouchableHighlight, Alert, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import {Text} from '../customComponents/Components.js';
import colors from '../../constants/Colors.js';
import { connect } from 'react-redux';
import {addStandardValue} from '../../actions/index.js';

class CatWeight extends Component {
    state = {
        value: 0
    }
    plus = ()=>{        
        this.setState({value: this.state.value+1})
    }
    minus = ()=>{
        if(this.state.value===0) return;
        this.setState({value: this.state.value-1})
    }
    handlePress = ()=>{
        const {value} = this.state;
        if(value===0) return;
        this.props.addStandardValue({
            label:'Jaja',
            value: value,
            category: 'jaja',
            typ: 'jaja'
        })
        Alert.alert(`Żółtka jaj: ${value} sztuk dodano`)
    }

    render() {
        const {value} = this.state;
        return(
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    <Text text='Zółtka jaj'/>                  
                    <View style={styles.numberInput}>
                        <TouchableHighlight
                        style={styles.buttonMinus}
                        onPress={this.minus}
                        underlayColor={colors.green}
                        >
                            <AntDesign 
                            name='minus'
                            size={20}
                            />
                        </TouchableHighlight>
                        <View style={styles.valueInput}><Text text={value} /></View>
                        <TouchableHighlight
                        style={styles.buttonPlus}
                        onPress={this.plus}
                        underlayColor={colors.green}
                        >
                            <AntDesign 
                            name='plus'
                            size={20}
                            />
                        </TouchableHighlight>                    
                    </View>
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
    numberInput: {
        flex: -1,
        width: 105,
        flexDirection: 'row'
    },
    valueInput: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 35,
        width: 35,
        borderColor: colors.grey,
        borderBottomWidth: 1,
        borderTopWidth: 1,
    },
    buttonMinus: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 35,
        width: 35,
        borderColor: colors.grey,
        borderWidth: 1,
        borderBottomLeftRadius: 4,
        borderTopLeftRadius: 4
    },
    buttonPlus: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 35,
        width: 35,
        borderColor: colors.grey,
        borderWidth: 1,
        borderBottomRightRadius: 4,
        borderTopRightRadius: 4
    },
    add: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: 50,
        padding: 5,
        borderRadius: 7
    }

});

const mapDispatchToProps = { addStandardValue }

const mapStateToProps = (state)=>{
    return {
        data: state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatWeight);