import {
    GET_CAT_WEIGHT,
    ADD_STANDARD_VALUE,
    DELETE_STANDARD_VALUE
} from './constants.js';

export const getCatWeight = (catWeight)=>{    
    return {
        type: GET_CAT_WEIGHT,
        catWeight
    }
};
export const addStandardValue = (value)=>{    
    return {
        type: ADD_STANDARD_VALUE,
        value
    }
};
export const deleteStandardValue = (value)=>{    
    return {
        type: DELETE_STANDARD_VALUE,
        value
    }
};

