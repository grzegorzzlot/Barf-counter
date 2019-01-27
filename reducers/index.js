import { combineReducers } from "redux";
import catWeight from './catWeight.js';
import mieso from './mieso.js';
import podroby from './podroby.js';
import serca from './serca.js';
import zoladki from './zoladki.js';
import kosci from './kosci.js';
export default combineReducers({
    catWeight,
    mieso,
    podroby,
    serca,
    zoladki,
    kosci
});