
import React from 'react';
import {StyleSheet} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import colors from './assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './components/Home';
import Details from './components/Details';
import Profile from './components/Profile';
import Liked from './components/Liked';
import About from './components/About';

Entypo.loadFont();
MaterialCommunityIcons.loadFont();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () =>{
  return (
    <Tab.Navigator
      initialRouteName= "Home"
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: colors.purple,
        inactiveTintColor: colors.gray,
        tabBarShowLabel: false
      }}
    >
      <Tab.Screen name="Liked" component={Liked}
        options={{
          tabBarLabel: "Liked",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="About" component={About}
        options={{
          tabBarLabel: "About",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="help-with-circle" color={color} size={size} />
            ),
        }}
      />
      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" color={color} size={size} />
            ),
        }}
      />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="TabNavigator" component={TabNavigator} 
            options={{
              headerShown: false,
            }}
            />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{
              headerShown: false
            }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 15,
    marginHorizontal: 15,
  }
})

export default App;
