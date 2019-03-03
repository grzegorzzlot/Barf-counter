import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import {Text} from '../../customComponents/Components.js';
import colors from '../../../constants/Colors';
import { micro } from '../../../constants/rules.js';
import {Counter} from '../../../modules/Counter.js';
import {connect} from 'react-redux';

class MicroItem extends Component {
    state = {
        amount: 0,
        standardValue: 0
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
        let standardValue = getStandard(name, micro)*(barfWeight/100);
        this.setState({
            amount: amount,
            standardValue: standardValue
        }); 
    }

    render() {
        const {amount, standardValue} = this.state;
        const {name, unit} = this.props;
        let sumIngr = amount.toFixed(2).toString().replace('.',',');
        return( 
            <View style={styles.container}>
                <View style={styles.header}><Text text={name} fontWeight='700' fontSize={18}/></View>
                <View style={styles.inner}>
                    <Text text={sumIngr+unit} />
                    <Text text={`Norma: ${standardValue.toFixed(2).toString().replace('.',',')+unit}`} />
                </View>               
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
    header: {
        marginBottom: 20,
    },
    inner: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

const mapStateToProps = (state)=>{
    return {
        data: state
    }
}

function getStandard(name, param) {
    for (let key in param) {
        if(key===name) {
            return (param[key])/10;
        }
    }
}

export default connect(mapStateToProps, null)(MicroItem);