let initialState = {egg: 0}
const egg = (state=initialState, action)=>{
    switch(action.type) {
        case "GET_EGG": 
        return Object.assign({}, state, action)
        default: return state
    }    
}

export default egg;