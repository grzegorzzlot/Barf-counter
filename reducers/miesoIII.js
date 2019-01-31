import initialStateMieso from '../constants/initialStateMieso.js';
let initialState = {
    mieso: initialStateMieso
}
const miesoIII = (state=initialState, action)=>{
    switch(action.type) {
        case "GET_MIESOIII": 
        return Object.assign({}, state, action);
        default: return state
    }    
} 

export default miesoIII;