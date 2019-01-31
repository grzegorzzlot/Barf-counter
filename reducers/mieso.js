import initialStateMieso from '../constants/initialStateMieso.js';
let initialState = {
    mieso: initialStateMieso
}
const mieso = (state=initialState, action)=>{
    switch(action.type) {
        case "GET_MIESO": 
        return Object.assign({}, state, action);
        default: return state
    }    
} 

export default mieso;