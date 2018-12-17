/*
 * action constants
 */

export const INCREMENT_STEP = 'INCREMENT_STEP'

/*
 * action creators
 */
export const incrementStep = (step)=>{ 
    console.log(step)   
    return {type: INCREMENT_STEP, step}
}