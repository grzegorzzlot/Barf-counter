import { combineReducers } from "redux";
import catWeight from './catWeight.js';
import getEgg from './egg.js';
import getTaurin from './taurin.js';
import getWater from './water.js'
import standardValue from './standardValue.js';
export default combineReducers({    
    standardValue,
    catWeight,
    getEgg,
    getTaurin,
    getWater
});