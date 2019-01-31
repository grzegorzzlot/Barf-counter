import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../../constants/Colors.js';
import {Constants} from 'expo';
import {connect} from 'react-redux';
import Progress from './Progress.js';
import { SumIngredients } from '../../modules/Counter.js';

class CurrentStatus extends Component {

    componentDidMount() {
        const {data} = this.props;        
        let obj = new SumIngredients(data);       
    }
    componentDidUpdate() {
        const {data} = this.props;
        let obj = new SumIngredients(data);
        console.log(obj.getSum())
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.statusBar}></View>
                <Progress />
            </View>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        data:[
            state.mieso.mieso,
            state.miesoII.miesoII,
            state.miesoIII.miesoIII,
            state.serca.serca,
            state.zoladki.zoladki,
            state.podroby.podroby,
            state.kosci.kosci
        ]
    }
          
        
        
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: colors.grey
    },
    statusBar: {
        height: Constants.statusBarHeight,
        backgroundColor: colors.green
    }
})






export default connect(mapStateToProps, null)(CurrentStatus);