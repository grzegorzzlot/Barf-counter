import React, {Component} from 'react';
import { View, ProgressBarAndroid, StyleSheet } from 'react-native';
import {Text} from '../../customComponents/Components.js';
import colors from '../../../constants/Colors';

class ListItem extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text text={this.props.name} />
                <ProgressBarAndroid 
                styleAttr='Horizontal'
                color={colors.green}
                indeterminate={false}
                progress={0.5}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        borderBottomWidth: 1,
        borderColor: colors.grey
    }
})


export default ListItem;