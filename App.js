import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return <NavigationContainer>
    <Stack.Navigator>

    </Stack.Navigator>
  </NavigationContainer>
};
export default App;
