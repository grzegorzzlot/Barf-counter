import React, {Component} from 'react';
import { FlatList, View } from 'react-native';
import MicroItem from './MicroItem.js';

class Micro extends Component {
    state = {
        data: [
            'Włókno',
            'Popiół',
            'Wapń',
            'Fosfor',
            'Magnez',
            'Sód',
            'Potas',
            'Chlor',
            'Żelazo',
            'Cynk',
            'Miedź',
            'Mangan',
            'Jod',
            'Selen',
            'Tauryna',
            'Witamina A',
            'Witamina D',
            'Witamina E', 
            'Witamina K', 
            'Witamina B1',
            'Witamina B2',
            'Witamina B3',
            'Witamina B5',
            'Witamina B6',
            'Witamina B7',
            'Witamina B9', 
            'Witamina B12',
            'Witamina C',
            'Kwas linolowy',
            'Kwas arachidonowy'
        ]
    }
    
    _keyExtractor = (item, index) => index.toString();
    render() {
        _renderItem = ({item}) => (
            <MicroItem
            name={item}           
            />
        );
        return(
            <FlatList
            data={this.state.data}
            keyExtractor={this._keyExtractor}
            renderItem={_renderItem}
            />
        )
    }
}

export default Micro;