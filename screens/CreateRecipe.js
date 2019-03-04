import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import CurrentStatus from '../components/currentStatus/CurrentStatus.js'
import CreateRecipeContent from '../components/createRecipeContent/CreateRecipeContent.js';
import { MaterialIcons } from '@expo/vector-icons';

class CreateRecipe extends Component {
    static navigationOptions = {
        title: 'Stwórz przepis',
        tabBarIcon: ({ focused, tintColor }) => {
            return <MaterialIcons name='create' size={30} color={tintColor} />;
        }
    };
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