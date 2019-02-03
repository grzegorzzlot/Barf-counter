import React, {Component} from 'react';
import { FlatList } from 'react-native';
import ListItem from './ListItem.js';

class List extends Component {

    _renderItem = ({item}) => (
        <ListItem
          label={item.label}
          value={item.value}
          typ={item.typ}
        />
    );
    _keyExtractor = (item, index) => index.toString();
    render() {
        return(
            <FlatList
            data={this.props.data}
            renderItem={this._renderItem} 
            keyExtractor={this._keyExtractor}
            />
        )
    }
}

export default List;