import initialStateMieso from '../constants/initialStateMieso.js';
let initialState = {
    podroby: initialStateMieso
}
const podroby = (state=initialState, action)=>{
    switch(action.type) {
        case "GET_PODROBY": 
        return Object.assign({}, state, action);
        default: return state
    }    
} 

export default podroby;