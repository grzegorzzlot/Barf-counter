import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import {Text} from '../customComponents/Components.js';
import mieso from '../../constants/data/mieso';
import kosci from '../../constants/data/kosci';
import podroby from '../../constants/data/podroby';
import serca from '../../constants/data/serca';
import zoladki from '../../constants/data/zoladki';
import Inputs from './Inputs.js';
import {connect} from 'react-redux';
import {
    getKosci, 
    getSerca, 
    getPodroby, 
    getZoladki, 
    getMieso,
    getMiesoII,
    getMiesoIII
} from '../../actions/index.js';
import colors from '../../constants/Colors';

class Meat extends Component { 

    render() {
        return( 
            <View>
                <View style={styles.textContainer}>
                    <Text text='Typ' fontFamily='product-sans-bold' />
                    <Text text='Masa w gramach' fontFamily='product-sans-bold' />
                </View>
                
                <View style={styles.section}>
                    <Text text="Mięso" fontFamily='product-sans-bold'/>
                    <Inputs params={mieso} doAction={this.props.getMieso}/>
                    <Inputs params={mieso} doAction={this.props.getMiesoII}/>
                    <Inputs params={mieso} doAction={this.props.getMiesoIII}/>
                </View> 
                <View style={styles.section}>
                    <Text text="Serca" fontFamily='product-sans-bold'/>
                    <Inputs params={serca} doAction={this.props.getSerca}/>
                </View>  
                <View style={styles.section}>
                    <Text text="Podroby" fontFamily='product-sans-bold'/>
                    <Inputs params={podroby} doAction={this.props.getPodroby}/>
                </View>
                <View style={styles.section}>
                    <Text text="Żołądki" fontFamily='product-sans-bold'/>
                    <Inputs params={zoladki} doAction={this.props.getZoladki}/>
                </View>
                <View style={styles.section}>
                    <Text text="Kości" fontFamily='product-sans-bold'/>
                    <Inputs params={kosci} doAction={this.props.getKosci}/>
                </View>                     
            </View>
        )
    }
}
const mapDispatchToProps = { 
    getKosci, 
    getMieso, 
    getMiesoII,
    getMiesoIII,
    getPodroby, 
    getSerca, 
    getZoladki
}

const styles = StyleSheet.create({ 
    textContainer: {
        marginTop: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        borderBottomWidth: 1,
        borderColor: colors.grey
    },
    section: {
        padding: 15,
        borderBottomWidth: 1,
        borderColor: colors.grey
    }
})

export default connect(null, mapDispatchToProps)(Meat); 