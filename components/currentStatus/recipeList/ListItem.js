import React, {Component} from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import {Text} from '../../customComponents/Components.js';
import {FontAwesome} from '@expo/vector-icons';
import colors from '../../../constants/Colors';
import {connect} from 'react-redux';
import {deleteStandardValue} from '../../../actions/index.js';

class ListItem extends Component {
    removeHandle = ()=>{
        const { deleteStandardValue, data, label } = this.props;        
        data.forEach((i,index) => {
            if(i.label===label) {
                deleteStandardValue(index);
                return;
            }    
        });        
    }

    render() {
        const { label, value, typ } = this.props;
        return(
            <View style={styles.container}>
                <View>
                    <Text text={label} fontFamily='product-sans-bold'/>
                    <Text text={`Typ: ${typ}`} fontFamily='product-sans-bold'/>
                    <Text text={`Ilość: ${value}g`} />
                </View>
                <TouchableOpacity
                onPress={this.removeHandle}
                style={styles.trash}
                >
                    <FontAwesome 
                    name='trash-o'
                    size={30}
                    />
                </TouchableOpacity>
            </View>                                
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        borderBottomWidth: 1,
        borderColor: colors.grey
    },
    trash: {
        paddingLeft: 15,
        paddingRight: 15
    }
})

const mapDispatchToProps = {deleteStandardValue};

const mapStateToProps = (state)=>{
    return {
        data: state.standardValue.list
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);