let initialState = {
    mieso: 0
}
const mieso = (state=initialState, action)=>{
    switch(action.type) {
        case "GET_MIESO": 
        return Object.assign({}, state, action);
        default: return state
    }    
} 

export default mieso;