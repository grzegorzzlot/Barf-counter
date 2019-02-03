let initialState = {
    list: []
}
const standardValue = (state=initialState, action)=>{
    switch(action.type) {
        case "ADD_STANDARD_VALUE": 
        return { 
            ...state,
            list:[...state.list, action.value]
        }
        case "DELETE_STANDARD_VALUE":
        return { 
            ...state,
            list:[
                ...state.list.slice(0, action.value),
                ...state.list.slice(action.value+1)
            ]
        }
        default: return state
    }    
}

export default standardValue; 