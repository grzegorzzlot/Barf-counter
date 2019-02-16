import React, {Component} from 'react';
import { FlatList, View } from 'react-native';
import MacroItem from './MacroItem.js';

class Macro extends Component {
    state = {
        data: [
            'Białko',
            'Tłuszcz',
            'Woda',
            'Węglowodany'
        ]
    }
    
    _keyExtractor = (item, index) => index.toString();
    render() {
        let extraData = Object.assign({}, this.state);
        _renderItem = ({item}) => (
            <MacroItem
            name={item}           
            />
        );
        return(
            <FlatList
            extraData={extraData}
            data={this.state.data}
            keyExtractor={this._keyExtractor}
            renderItem={_renderItem}
            />            
        )
    }
}

export default Macro;