// In App.js in a new project

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import ProductListScreen from './Screen/ProductListScreen';
import ProductDetailsScreen from './Screen/ProductDetailsScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductList">
        <Stack.Screen 
          name="ProductList" 
          component={ProductListScreen} 
          options={{ 
            title: 'PRODUCT LIST',
            headerStyle: {
              backgroundColor: '#ff0000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="ProductDetails" 
          component={ProductDetailsScreen} 
          options={{ 
            title: 'PRODUCT DETAILS',
            headerStyle: {
              backgroundColor: '#ff0000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;