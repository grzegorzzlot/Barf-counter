import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import CreateRecipe from './screens/CreateRecipe.js';
import SavedRecipes from './screens/SavedRecipes.js';
import colors from './constants/Colors.js';

const AppContainer = createBottomTabNavigator({
    CreateRecipe: CreateRecipe,
    SavedRecipes: SavedRecipes,
},
{tabBarOptions: {
    activeTintColor: colors.green,
    labelStyle: {
      fontSize: 14,
    },
    style: {
      backgroundColor: '#fff',
    },
  }}
);

export default createAppContainer(AppContainer);