import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import mieso from '../../../constants/data/mieso';
import kosci from '../../../constants/data/kosci';
import podroby from '../../../constants/data/podroby';
import serca from '../../../constants/data/serca';
import zoladki from '../../../constants/data/zoladki';
import Mieso from './Mieso';
import Serca from './Serca';
import Podroby from './Podroby';
import Zoladki from './Zoladki';
import Kosci from './Kosci';

class Meat extends Component { 

    render() {
        return( 
            <View style={styles.container}>
                <Mieso params={mieso} />
                <Serca params={serca} />
                <Podroby params={podroby} />
                <Zoladki params={zoladki} />
                <Kosci params={kosci} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30
    }
})

export default Meat; 