import React, {Component} from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import tluszcze from '../../../constants/data/tluszcze';
import StandardInput from '../StandardInput.js';
import {Text} from '../../customComponents/Components.js';
import colors from '../../../constants/Colors';

const arr = [
    ['tluszcze','tluszcze']
]

class Tluszcze extends Component {
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
        data={tluszcze}
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
                    size={20}
                    name={isWisible? 'chevron-thin-down': 'chevron-thin-right'}
                    />
                    <Text text='Tłuszcze' fontSize={20}/>
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
        backgroundColor: colors.lightGrey,
        borderBottomColor: colors.grey,
        borderBottomWidth: 1
    }
})

export default Tluszcze;
