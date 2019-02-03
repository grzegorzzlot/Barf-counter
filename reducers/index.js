import { combineReducers } from "redux";
import catWeight from './catWeight.js';
import standardValue from './standardValue.js';
export default combineReducers({
    catWeight,
    standardValue
});