import React, {Component} from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
// import ModalInputs from './ModalInputs.js';
import List from './List.js';
import {getCatWeight, getEgg, getTaurin, getWater} from '../../actions/index.js';
import {connect} from 'react-redux';
import CatWeight from './CatWeight.js';
import Taurin from './Taurin.js';
import Water from './Water.js';
import Egg from './Egg.js';
import Submit from './Submit.js';


class CreateRecipeContent extends Component {
    render() {
        return(
            <View style={styles.container}>                
                <CatWeight 
                label='Waga kota w kilogramach'
                unit='kg'
                />
                <List /> 
                <Egg />
                <Taurin />
                <Water />
                <Submit />               
            </View>
        )
    }
}

const mapDispatchToProps = {
    cat: getCatWeight, 
    egg: getEgg, 
    taurin: getTaurin, 
    water: getWater
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default connect(null, mapDispatchToProps)(CreateRecipeContent);