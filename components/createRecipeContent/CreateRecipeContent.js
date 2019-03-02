import React, {Component} from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import ModalInputs from './ModalInputs.js';
import List from './List.js';
import {getCatWeight, getEgg, getTaurin, getWater} from '../../actions/index.js';
import {connect} from 'react-redux';


class CreateRecipeContent extends Component {
    render() {
        const {cat, egg, taurin, water} = this.props;
        return(
            <View style={styles.container}>
                <ScrollView style={styles.scroll}>
                    <ModalInputs 
                    action={cat}
                    label='Waga kota w kilogramach'
                    unit='kg'
                    />
                    <List /> 
                    <ModalInputs 
                    action={egg}
                    label='Żółtka jaj'
                    unit='sztuk'
                    />
                     <ModalInputs 
                    action={taurin}
                    label='Tauryna'
                    unit='g'
                    />
                     <ModalInputs 
                    action={water}
                    label='Woda'
                    unit='g'
                    />                   
                </ScrollView>
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
    },
    scroll: {
        flex: 1
    }
})

export default connect(null, mapDispatchToProps)(CreateRecipeContent);