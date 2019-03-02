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
            'Vitamin A',
            'Vitamin D',
            'Vitamin E', 
            'Vitamin K', 
            'Vitamin B1',
            'Vitamin B2',
            'Vitamin B3',
            'Vitamin B5',
            'Vitamin B6',
            'Vitamin B7',
            'Vitamin B9', 
            'Vitamin B12',
            'Vitamin C',
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