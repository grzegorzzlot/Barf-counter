import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {Text} from '../../customComponents/Components.js';
import colors from '../../../constants/Colors.js';
import {Counter} from '../../../modules/Counter.js';
import { connect } from 'react-redux';

class TopInfo extends Component {
    state = {
        barfWeight: 0
    }
    componentDidMount() {
        const {list} = this.props.data.standardValue;       
        let counter = new Counter(list);
        let barfWeight = counter.sumWeight();
        this.setState({barfWeight: barfWeight})
    }
    render() {
        const weight = this.props.data.catWeight.catWeight;
        const {barfWeight} = this.state;
        const days = Math.floor(barfWeight/(weight*25));
        if (barfWeight!==0 && weight!==0) {
            return(
                <View style={styles.container}>
                    <Text 
                    text={`Waga kota: ${weight.toString().replace('.',',')} kg`} 
                    fontWeight='700'
                    />
                    <Text 
                    text={`Mieszanka wystarczy na ${days} dni`} 
                    fontWeight='700'
                    />
                </View>
            )
        } else {
            return (
                <View></View>
            )            
        }       
    }
}

const mapStateToProps = (state)=>{
    return {
        data: state
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        borderBottomWidth: 1,
        borderColor: colors.grey
    }
})

export default connect(mapStateToProps, null)(TopInfo);