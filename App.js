/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  Text,
} from 'react-native';
import TourMap from './screens/TourMap';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import IntroPage from './screens/IntroPage';
import FirstPage from './screens/FirstPage';
import ChooseMap from './screens/ChooseMap';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="intro"
            component={IntroPage}
            options={{headerShown: false}}
          />
           <Stack.Screen
            name="first"
            component={FirstPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="tourism"
            component={TourMap}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="choose"
            component={ChooseMap}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
     
    </>
  );
};


export default App;
