import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

class SavedRecipes extends Component {
    static navigationOptions = {
        title: 'Zapisane przepisy',
        tabBarIcon: ({ focused, tintColor }) => {
            return <MaterialIcons name='save' size={30} color={tintColor} />;
        }
    };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
            </View>
        );
    }
}

export default SavedRecipes;