let initialState = {
    podroby: 0
}
const podroby = (state=initialState, action)=>{
    switch(action.type) {
        case "GET_PODROBY": 
        return Object.assign({}, state, action);
        default: return state
    }    
} 

export default podroby;