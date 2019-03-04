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
        if(name==='Białko') {
            this.protein(); 
        }                    
    }

    protein = (param)=>{
        const {barfWeight} = this.state;
        const weight = this.props.data.catWeight.catWeight;
        const days = Math.floor(barfWeight/(weight*25));
        const result = param/(days*weight);
        if(result) {
            return result.toFixed(2).toString().replace('.',',');
        }
        else {
            return '0'
        }
    }

    render() {
        const {amount, sum} = this.state;
        const {name} = this.props;
        let val = amount*100;
        let percent = val.toFixed(2).toString().replace('.',',');
        let sumIngr = sum.toFixed(2).toString().replace('.',',');
        return( 
            <View style={styles.container}>
                <View style={styles.header}><Text text={name} fontWeight='700' fontSize={18}/></View>                
                <View style={styles.progressWrapper}>
                    <ProgressBar 
                    amount={amount}
                    min={macroMin[name]}
                    max={macroMax[name]}
                    />                                        
                </View>
                <View style={styles.range}>
                    <Text text='0%' />
                    <Text text={percent+'%'} />
                    <Text text='100%' />
                </View>  
                <View style={styles.textField}>
                    <Text text={`Masa składnika: ${sumIngr}g`} />
                    {/* <Text text={`Masa składnika wedlug normy: ${percent}g`} /> */}
                    {name==='Białko'? <Text text={`Dzienna ilość białka na kg masy kota: ${this.protein(sum)}g`} /> : null}                                       
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
    progressWrapper: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    textField:{
        flex: 1
    },
    range: {
        marginBottom: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

const mapStateToProps = (state)=>{
    return {
        data: state
    }
}


export default connect(mapStateToProps, null)(ListItem);