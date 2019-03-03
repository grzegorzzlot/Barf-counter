import React, {Component} from 'react';
import { FlatList} from 'react-native';
import MicroItem from './MicroItem.js';

class Micro extends Component {
    state = {
        data: [
            ['Włókno', 'mg'],
            ['Popiół', 'mg'],
            ['Wapń', 'mg'],
            ['Fosfor', 'mg'],
            ['Magnez', 'mg'],
            ['Sód', 'mg'],
            ['Potas', 'mg'],
            ['Chlor', 'mg'],
            ['Żelazo', 'mg'],
            ['Cynk', 'mg'],
            ['Miedź', 'mg'],
            ['Mangan', 'mg'],
            ['Jod', 'µg'],
            ['Selen', 'µg'],
            ['Tauryna', 'µg'],
            ['Vitamin A', 'I.E.'],
            ['Vitamin D', 'I.E.'],
            ['Vitamin E', 'I.E.'], 
            ['Vitamin K', 'µg'], 
            ['Vitamin B1', 'mg'],
            ['Vitamin B2', 'mg'],
            ['Vitamin B3', 'mg'],
            ['Vitamin B5', 'mg'],
            ['Vitamin B6', 'mg'],
            ['Vitamin B7', 'µg'],
            ['Vitamin B9', 'µg'], 
            ['Vitamin B12', 'µg'],
            ['Vitamin C', 'mg'],
            ['Kwas linolowy', 'g'],
            ['Kwas arachidonowy', 'mg']
        ]
    }
    
    _keyExtractor = (item, index) => index.toString();
    render() {
        _renderItem = ({item}) => (
            <MicroItem
            name={item[0]}
            unit={item[1]}           
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