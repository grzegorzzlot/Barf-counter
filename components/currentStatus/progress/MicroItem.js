import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import {Text} from '../../customComponents/Components.js';
import colors from '../../../constants/Colors';
import {Counter} from '../../../modules/Counter.js';
import {connect} from 'react-redux';

class MicroItem extends Component {
    state = {
        amount: 0
    }
    componentDidMount() {
        const {name} = this.props;
        const {list} = this.props.data.standardValue;
        let counter = new Counter(list);
        const sumOfIngredients = counter.sumIngredients();
        let barfWeight = counter.sumWeight();
        let amount = sumOfIngredients[name];
        //asssign 0, when amount is undefined;
        if(amount===undefined) {
            amount=0;
        }
        amount = amount*barfWeight;
        this.setState({amount: amount});
    }

    render() {
        const {amount} = this.state;
        const {name} = this.props;
        return( 
            <View style={styles.container}>
                <Text text={name} /> 
                <Text text={amount} />                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        borderBottomWidth: 1,
        borderColor: colors.grey
    },
    progressWrapper: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row'
    }
})

const mapStateToProps = (state)=>{
    return {
        data: state
    }
}

export default connect(mapStateToProps, null)(MicroItem);