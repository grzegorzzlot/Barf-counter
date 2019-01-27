import React from 'react';
import {Text as TextR} from 'react-native';

export const Text = ({
    text, 
    fontFamily='product-sans-regular',
    color='#333',
    fontSize=16,
    fontWeight='400'})=>{
    return(
        <TextR style={{
            fontFamily: fontFamily,
            color: color,
            fontSize: fontSize,
            fontWeight: fontWeight
        }}
        >
        {text}</TextR>
    )
}

