let initialState = {step:1}

export function step (state=initialState, action) {
    console.log(action)
    switch(action.type) {
        case "INCREMENT_STEP": 
        return Object.assign( {}, state, {step: state.step+1})
        default: return state
    }    
}