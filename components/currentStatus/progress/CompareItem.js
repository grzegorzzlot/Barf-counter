import React, { Component } from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from '../../customComponents/Components.js';
import colors from '../../../constants/Colors';
import {Counter} from '../../../modules/Counter.js';
import {connect} from 'react-redux';

class CompareItem extends Component {
    state = {
        amount: 0
    }
    componentDidMount() {
        const {items} = this.props;
        const {list} = this.props.data.standardValue;
        let counter = new Counter(list);
        const sumOfIngredients = counter.sumIngredients();
        let firstItemWeight = sumOfIngredients[items[0]];
        let secondItemWeight = sumOfIngredients[items[1]];
        // asssign 0, when amount is undefined;
        if(firstItemWeight===undefined && secondItemWeight===undefined) {
            this.setState({amount: 0});
        } else {
            this.setState({amount: firstItemWeight/secondItemWeight});
        }        
    }
    render() {
        const {amount} = this.state;
        const {items, norma} = this.props;
        return(
            <View style={styles.container}>
                <View style={styles.header}><Text text={`${items[0]}:${items[1]}`} fontWeight='700' fontSize={18}/></View>
                <View style={styles.inner}>
                    <Text text={`Stosunek: ${amount}`} />
                    <Text text={`Norma: ${norma}`} />
                </View>               
            </View>
        )
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
    },
    header: {
        marginBottom: 20,
    },
    inner: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});

export default connect(mapStateToProps, null)(CompareItem);