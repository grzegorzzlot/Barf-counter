import React, {Component} from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import CatWeight from './CatWeight';
import Meat from './Meat';

class CreateRecipeContent extends Component {
    render() {
        return(
            <View style={styles.container}>
                <ScrollView>
                    <CatWeight />
                    <Meat />
                </ScrollView>
            </View>
        )
    }
}

const styles =  StyleSheet.create({
    container: {
        flex: 3,
    }
})

export default CreateRecipeContent;