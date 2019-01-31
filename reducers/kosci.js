import initialStateMieso from '../constants/initialStateMieso.js';
let initialState = {
    kosci: initialStateMieso
}
const kosci = (state=initialState, action)=>{
    switch(action.type) {
        case "GET_KOSCI": 
        return Object.assign({}, state, action);
        default: return state
    }    
} 

export default kosci;