import React from 'react';
import {View, StyleSheet} from 'react-native';
import Mieso from './items/Mieso.js';
import GotowePreparaty from './items/GotowePreparaty.js';
import SupleWitA from './items/SupleWitA.js';
import SupleInne from './items/SupleInne.js';
import Tluszcze from './items/Tluszcz.js';
import Oleje from './items/Oleje.js';
import WapnoFosfor from './items/WapnoFosfor.js';
import Sod from './items/Sod.js';
import Warzywa from './items/Warzywa.js';

const List = ()=>{
    return(
       <View style={styles.container}>
            <Mieso />
            <GotowePreparaty />
            <SupleWitA />
            <SupleInne />
            <Tluszcze />
            <Oleje />
            <WapnoFosfor />
            <Sod />
            <Warzywa />
       </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 30,
        borderRadius: 13,
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
    },    
})

export default List;