import { StyleSheet } from 'react-native';
import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home/Home';
import { createStackNavigator } from '@react-navigation/stack';
import Details from './components/Details/Details';
import { Provider } from 'react-redux';
import store from "./redux/store/store";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {CardStyleInterpolators, HeaderStyleInterpolators } from "@react-navigation/stack"

const Stack = createStackNavigator();

export default function App() {

  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });

  return (
    <Provider store={store}>
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" screenOptions={{
      headerShown: false,
      cardStyleInterpolator: forFade,
   }}>
              <Stack.Screen
                  name="Home"
                  component={Home}
                  options={{headerShown: false}}
              />
              <Stack.Screen
                  name="Details"
                  component={Details}
                  options={{headerShown: false}}
              />
          </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
