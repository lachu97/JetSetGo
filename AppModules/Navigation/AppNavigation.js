import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../Views/HomeScreen';
import DetailScreen from "../Views/DetailScreen";

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'Home'}>
        <Stack.Screen name={'Home'} component={HomeScreen} />
        <Stack.Screen name={'Detail'} component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigation;
