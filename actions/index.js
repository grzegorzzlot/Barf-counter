import {
    GET_CAT_WEIGHT,
    GET_MIESO,
    GET_SERCA,
    GET_PODROBY,
    GET_ZOLADKI,
    GET_KOSCI
} from './constants.js';

export const getCatWeight = (catWeight)=>{    
    return {
        type: GET_CAT_WEIGHT,
        catWeight
    }
};

export const getMieso = (mieso)=>{    
    return {
        type: GET_MIESO,
        mieso
    }
};

export const getSerca = (serca)=>{    
    return {
        type: GET_SERCA,
        serca
    }
};
export const getPodroby = (podroby)=>{    
    return {
        type: GET_PODROBY,
        podroby
    }
};
export const getZoladki = (zoladki)=>{    
    return {
        type: GET_ZOLADKI,
        zoladki
    }
};
export const getKosci = (kosci)=>{    
    return {
        type: GET_KOSCI,
        kosci
    }
};
