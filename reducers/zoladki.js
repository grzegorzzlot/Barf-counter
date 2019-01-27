let initialState = {
    zoladki: 0
}
const zoladki = (state=initialState, action)=>{
    switch(action.type) {
        case "GET_ZOLADKI": 
        return Object.assign({}, state, action);
        default: return state
    }    
} 

export default zoladki;