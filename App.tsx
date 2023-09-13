import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import InitialComponent from './components/InitialComponent';
import DetailsComponents from './components/DetailsComponents';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='inicio'>
        <Stack.Screen name='inicio' component={InitialComponent}/>
        <Stack.Screen name="detalles" component={DetailsComponents} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}