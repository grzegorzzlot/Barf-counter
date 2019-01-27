let initialState = {
    kosci: 0
}
const kosci = (state=initialState, action)=>{
    switch(action.type) {
        case "GET_KOSCI": 
        return Object.assign({}, state, action);
        default: return state
    }    
} 

export default kosci;