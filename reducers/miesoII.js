import initialStateMieso from '../constants/initialStateMieso.js';
let initialState = {
    mieso: initialStateMieso
}
const miesoII = (state=initialState, action)=>{
    switch(action.type) {
        case "GET_MIESOII": 
        return Object.assign({}, state, action);
        default: return state
    }    
} 

export default miesoII;