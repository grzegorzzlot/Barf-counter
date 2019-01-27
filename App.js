import React, { Component } from 'react';
import { AppLoading, Font } from 'expo';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import AppContainer from './AppContainer.js';

const store = createStore(reducers);

class App extends Component {
    state = {
        loaded: false,
    }
    componentDidMount() {
        this._loadFontsAsync();
        
    }
    _loadFontsAsync = async () => {
        await Font.loadAsync({
            'product-sans-bold': require('./assets/fonts/Product-Sans-Bold.ttf'),
            'product-sans-regular': require('./assets/fonts/Product-Sans-Regular.ttf')
        });
        this.setState({loaded: true});
    }


    render() {
        if (!this.state.loaded) {
            return <AppLoading />;
        }
        return ( 
            <Provider store={store}>
                <AppContainer /> 
            </Provider>                 
        )        
    }
}


export default App; 