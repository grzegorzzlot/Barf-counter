import React, {Component} from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import ModalInputs from './ModalInputs.js';
import List from './List.js';
import {getCatWeight} from '../../actions/index.js';
import {connect} from 'react-redux';


class CreateRecipeContent extends Component {
    render() {
        return(
            <View style={styles.container}>
                <ScrollView>
                    <ModalInputs 
                    action={getCatWeight}
                    label='Waga kota w kilogramach'
                    unit='kg'
                    />
                    <List /> 
                    <ModalInputs 
                    action={getCatWeight}
                    label='Żółtka jaj'
                    unit='sztuk'
                    />
                     <ModalInputs 
                    action={getCatWeight}
                    label='Tauryna'
                    unit='g'
                    />
                     <ModalInputs 
                    action={getCatWeight}
                    label='Woda'
                    unit='g'
                    />                   
                </ScrollView>
            </View>
        )
    }
}

const mapDispatchToProps = {getCatWeight}

const styles =  StyleSheet.create({
    container: {
        flex: 3,
    }
})

export default connect(null, mapDispatchToProps)(CreateRecipeContent);