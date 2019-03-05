import React, {Component} from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import {Constants} from 'expo';
import CurrentStatus from '../components/currentStatus/CurrentStatus.js'
import CreateRecipeContent from '../components/createRecipeContent/CreateRecipeContent.js';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../constants/Colors.js';

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
                <View style={styles.statusBar}></View>
                <ScrollView>
                    <CurrentStatus />
                    <CreateRecipeContent />
                </ScrollView>
                
            </View>
        );
    }
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgColor
    },
    statusBar: {
        height: Constants.statusBarHeight,
        backgroundColor: colors.green
    }
})

export default CreateRecipe;