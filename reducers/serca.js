let initialState = {
    serca: 0
}
const serca = (state=initialState, action)=>{
    switch(action.type) {
        case "GET_SERCA": 
        return Object.assign({}, state, serca);
        default: return state
    }    
} 

export default serca;