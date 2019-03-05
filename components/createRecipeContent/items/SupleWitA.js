import React, {Component} from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import ryby from '../../../constants/data/ryby';
import suplementy from '../../../constants/data/suplementy';
import StandardInput from '../StandardInput.js';
import {Text} from '../../customComponents/Components.js';
import colors from '../../../constants/Colors';

const arr = [
    ['Wit A','suplementy'],
    ['ryby','ryby'],
    ['Wit D','suplementy']
]

class SupleWitA extends Component {
    state = {
        isWisible: false
    }
    toggle = ()=>{
        this.setState(prevState => ({
          isWisible: !prevState.isWisible
        }));
    }
    _renderItem = ({item}) => (
        <StandardInput
        data={item[1]==='suplementy'? suplementy : ryby}
        typ={item[0]}
        category={item[1]}
        />
      );
    _keyExtractor = (item, index) => index.toString();
    render() {
        const {isWisible} = this.state;
        return (
            <View>
                <TouchableOpacity 
                style={styles.button} 
                onPress={this.toggle}
                activeOpacity={1}
                >
                    <Entypo 
                    size={16}
                    name={isWisible? 'chevron-thin-down': 'chevron-thin-right'}
                    />
                    <Text text='Witamina A, witamina D' fontSize={16}/>
                    <Entypo 
                    style={{position: 'absolute', right: 15, top: 15}}
                    size={20}
                    name={isWisible? 'minus': 'plus'}
                    />
                </TouchableOpacity>
                {isWisible?
                <FlatList 
                data={arr}
                renderItem={this._renderItem}
                keyExtractor={this._keyExtractor}
                />
                :null}                
            </View>
        )
    } 
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 10, 
        paddingTop: 15,
        paddingBottom: 15,       
        backgroundColor: colors.white,

    }
})

export default SupleWitA;
