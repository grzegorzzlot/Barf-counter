import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import Home from './screens/Home.js';
import MyRecipe from './screens/MyRecipe.js';
import colors from './constants/Colors.js'

const RootStack = createDrawerNavigator({
    Home: Home,
    MyRecipe: MyRecipe
}, {
        initialRouteName: 'Home',
        contentOptions: {
            activeTintColor: colors.green,
        },
    });

const AppContainer = createAppContainer(RootStack);

const store = createStore(reducers);

class App extends Component {
    state = {
        isWalid: false
    }
    handlePress = () => {
        this.setState({ isWalid: true });
    }
    render() {
        if (this.state.isWalid) {
            return ( 
                <Provider store={store}>
                    <AppContainer /> 
                </Provider>                 
            )
        } else {
            return (
                <View style={styles.container}>
                    <Button
                        title="Klik"
                        onPress={this.handlePress} />
                </View>
            )
            
        }

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default App; 