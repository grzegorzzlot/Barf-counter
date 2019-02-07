let initialState = {water: 0}
const water = (state=initialState, action)=>{
    switch(action.type) {
        case "GET_WATER": 
        return Object.assign({}, state, action)
        default: return state
    }    
}

export default water;