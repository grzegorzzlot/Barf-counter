let initialState = {taurin: 0}
const taurin = (state=initialState, action)=>{
    switch(action.type) {
        case "GET_TAURIN": 
        return Object.assign({}, state, action)
        default: return state
    }    
}

export default taurin;