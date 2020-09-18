import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';


const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
            tabBarColor:'#009387',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
            tabBarColor:'#1f65ff',
          tabBarLabel: 'Details',
          tabBarIcon: ({ color }) => (
            <Icon name="md-notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
            tabBarColor:'#694fad',
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
            tabBarColor:'#d02860',
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color }) => (
            <Icon name="aperture" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#009387'
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight:'bold'
      },
    }} >
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'Overview',
        headerLeft: () => (
          <Icon.Button name="menu-outline" size={25} backgroundColor='#009387'
          onPress={() => {navigation.openDrawer()} }></Icon.Button>
        )
      }} />
    </HomeStack.Navigator>
  );
  
  
  const DetailsStackScreen = ({navigation}) => (
    <DetailsStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#009387'
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight:'bold'
      },
    }} >
      <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
        
        headerLeft: () => (
          <Icon.Button name="menu-outline" size={25} backgroundColor='#009387'
          onPress={() => {navigation.openDrawer()} }></Icon.Button>
        )
      }}  />
    </DetailsStack.Navigator>
  );