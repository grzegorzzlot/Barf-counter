import {
    GET_CAT_WEIGHT,
    ADD_STANDARD_VALUE,
    DELETE_STANDARD_VALUE,
    GET_EGG,
    GET_TAURIN,
    GET_WATER
} from './constants.js';

export const getCatWeight = (catWeight)=>{    
    return {
        type: GET_CAT_WEIGHT,
        catWeight
    }
};
export const getEgg = (egg)=>{    
    return {
        type: GET_EGG,
        egg
    }
};
export const getTaurin = (taurin)=>{    
    return {
        type: GET_TAURIN,
        taurin
    }
};
export const getWater = (water)=>{    
    return {
        type: GET_WATER,
        water
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

