let initialState = {catWeight: 0}
const catWeight = (state=initialState, action)=>{
    switch(action.type) {
        case "GET_CAT_WEIGHT": 
        return Object.assign({}, state, action)
        default: return state
    }    
}

export default catWeight;