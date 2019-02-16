import React from 'react';
import {ProgressBarAndroid, StyleSheet} from 'react-native';
import colors from '../../../constants/Colors';

const ProgressBar = (props)=>{
    const {amount, min, max} = props;
    if((amount*100)<min || (amount*100)>max) {
        return(
            <ProgressBarAndroid 
            style={styles.progress}
            styleAttr='Horizontal'
            color={colors.red}
            indeterminate={false}
            progress={props.amount}
            />
        ) 
    } else {
        return(
            <ProgressBarAndroid 
            style={styles.progress}
            styleAttr='Horizontal'
            color={colors.green}
            indeterminate={false}
            progress={props.amount}
            />
        )
    }   
}

const styles = StyleSheet.create({
    progress: {
        flex: 5
    }
})

export default ProgressBar;