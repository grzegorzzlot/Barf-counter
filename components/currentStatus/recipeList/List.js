import React, {Component} from 'react';
import { FlatList, View } from 'react-native';
import ListItem from './ListItem.js';
import TopInfo from './TopInfo.js';

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
            <View>
                <TopInfo />
                <FlatList
                data={this.props.data}
                renderItem={this._renderItem} 
                keyExtractor={this._keyExtractor}
                />
            </View>            
        )
    }
}

export default List;