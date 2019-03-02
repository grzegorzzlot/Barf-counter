import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import {Text} from '../../customComponents/Components.js';
import colors from '../../../constants/Colors';
import { macroMin, macroMax } from '../../../constants/rules.js';
import {Counter} from '../../../modules/Counter.js';
import {connect} from 'react-redux';
import ProgressBar from './ProgressBar.js';

class ListItem extends Component {
    state = {
        barfWeight: 0,
        amount: 0,
        sum: 0
    }
    componentDidMount() {
        const {name} = this.props;
        const {list} = this.props.data.standardValue;       
        let counter = new Counter(list);
        const sumOfIngredients = counter.sumIngredients();
        let barfWeight = counter.sumWeight();
        let amount;
        //get sum of ingedient
        let sum = sumOfIngredients[name];
        if(name==="Woda") {
            amount = sumOfIngredients["Woda"]/barfWeight;
        } else {
            let dryWeight = barfWeight - sumOfIngredients["Woda"];
            amount = sumOfIngredients[name]/dryWeight;
        } 
        //assign 0 when amount is not a number
        if(isNaN(amount)) {
            amount=0;
            sum=0;
        }   
        this.setState({
            barfWeight: barfWeight,
            amount: amount,
            sum: sum
        });               
    }
    render() {
        const {amount, sum} = this.state;
        const {name} = this.props;
        let val = amount*100;
        let percent = val.toFixed(2).toString().replace('.',',');
        let sumIngr = sum.toFixed(2).toString().replace('.',',');
        return( 
            <View style={styles.container}>
                <Text text={name} />
                <View style={styles.progressWrapper}>
                    <ProgressBar 
                    amount={amount}
                    min={macroMin[name]}
                    max={macroMax[name]}
                    />                                        
                </View>  
                <View style={styles.textField}>
                    <Text text={sumIngr+' g'} />
                    <Text text={percent+' %'} />
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
    progressWrapper: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    textField:{
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

export default connect(mapStateToProps, null)(ListItem);