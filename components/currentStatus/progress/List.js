import React, {Component} from 'react';
import { FlatList, StyleSheet } from 'react-native';
import initialData from '../../../constants/initialStateMieso';
import ListItem from './ListItem.js';
import {Counter} from '../../../modules/Counter.js';
import {connect} from 'react-redux';

class List extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        const {list} = this.props.data.standardValue;
        const arr = []
        for(let key in initialData) {
            arr.push(key)
        }
        this.setState({data: arr})
        let ss = new Counter(list);
        const sum = ss.sumIngredients();
        const wei = ss.sumWeight();
        console.log(sum)
    }
    _renderItem = ({item}) => (
        <ListItem
        name={item}
        />
    );
    _keyExtractor = (item, index) => index.toString();
    render() {
        return(
            <FlatList
            data={this.state.data}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            />
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        data: state
    }
}

export default connect(mapStateToProps, null)(List);