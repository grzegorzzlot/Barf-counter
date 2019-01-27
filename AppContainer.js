import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import CreateRecipe from './screens/CreateRecipe.js';
import SavedRecipes from './screens/SavedRecipes.js';

const AppContainer = createBottomTabNavigator({
    CreateRecipe: CreateRecipe,
    SavedRecipes: SavedRecipes,
});

export default createAppContainer(AppContainer);