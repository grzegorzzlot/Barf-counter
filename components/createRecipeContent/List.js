import React from 'react';
import {View} from 'react-native';
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
       <View>
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

export default List;