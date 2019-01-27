import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import CurrentStatus from '../components/currentStatus/CurrentStatus.js'
import CreateRecipeContent from '../components/createRecipeContent/CreateRecipeContent.js';

class CreateRecipe extends Component {
    render() {
        return (
            <View style={styles.container}>
                <CurrentStatus />
                <CreateRecipeContent />
            </View>
        );
    }
}

const styles =  StyleSheet.create({
    container: {
        flex: 1
    }
})

export default CreateRecipe;