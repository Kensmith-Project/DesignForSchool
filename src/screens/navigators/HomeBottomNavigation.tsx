import React from 'react'
import 'react-native-gesture-handler';


import AntDesign from 'react-native-vector-icons/AntDesign' //staro 2. search1 3. play 4. hearto 5. 
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons' //5 account
 

 
import
MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons'
import {
  NavigationContainer, ParamListBase, RouteProp
} from '@react-navigation/native';
import {
  createStackNavigator, Header
} from '@react-navigation/stack';

import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';
import Bills from '../BottomHomeScreens/Bills';
import History from '../BottomHomeScreens/History';

import Profile from '../BottomHomeScreens/Profile';
import HomeStack from './HomeStack';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import AccountIcon from '../../icons/AccountIcon';
import TransactionSvg from '../../icons/Transaction';
import HomeSvg from '../../icons/Home';
import { Platform, View } from 'react-native';
import Featured from '../BottomHomeScreens/Featured';
import Search from '../BottomHomeScreens/Search';
import WishList from '../BottomHomeScreens/WishList';
import Account from '../BottomHomeScreens/Account';
import MyLearning from '../BottomHomeScreens/MyLearning';
import Home from '../BottomHomeScreens/Home';
import HireServiceAgentScreen from '../BottomHomeScreens/HireServiceAgentScreen';


export interface BottomTabNavigatorProps{
  route?: RouteProp<ParamListBase, string>;
  navigation?: any;
};

const HomeBottomNavigation : React.FC<BottomTabNavigatorProps> = ({
  navigation, route
})=> {
  
  
  return(
    <NavigationContainer>
    <Tab.Navigator
    initialRouteName="featured"
    
    screenOptions={({ route })=>({
      tabBarActiveTintColor: "#ffffff",
      
     
      tabBarLabelStyle:{
        fontSize: 12,
        letterSpacing: 0.75,
        fontWeight: '500',
        paddingBottom: Platform.OS === 'android' ? 4 : 0
      },
      
      headerShown: false,
      tabBarHideOnKeyboard: true,
      tabBarStyle:{
        backgroundColor:'#000000'
      }


      
    })}
    
  >
     <Tab.Screen name="Home" component={HomeStack}
      options={{
        tabBarLabel: 'Featured',
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="staro" color={color} size={size} />
        )}}
    
      />
     
      <Tab.Screen name="History" component={History}
      
      options={{
        tabBarLabel: 'search',
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="search1" color={color} size={size} />
        )}}
      /> 
      <Tab.Screen name="mylearning" component={HireServiceAgentScreen}
       options={{
        tabBarLabel: 'Mylearning',
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="play" color={color} size={size} />
        )}}
        
      /> 

<Tab.Screen name="transport" component={Home}
      options={{
        tabBarLabel: 'Wishlist',
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="hearto" color={color} size={size} />
        )}}
    
      />

<Tab.Screen name="account" component={Profile}
      options={{
        tabBarLabel: 'Account',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcon name="account" color={color} size={size} />
        )}}
    
      />
       
      
  </Tab.Navigator>
  </NavigationContainer>
)
}

export default HomeBottomNavigation