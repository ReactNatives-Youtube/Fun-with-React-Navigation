// Hiding bottom tabs

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from "@react-navigation/native"
import {CartStack, ProductStack} from './StackNavigation';
import ProfileScreen from '../Screens/Profile';
import ChatBotScreen from '../Screens/ChatBot';

const Tabs = createBottomTabNavigator();
const TabsNavigation = () => {
  return (
    <Tabs.Navigator screenOptions={({route})=>({headerShown: false,})}>
      <Tabs.Screen name="HomeTab" component={ProductStack} options={({route})=>({
        tabBarStyle:{display:getTabBarVisibility(route)}
      })}/>
      <Tabs.Screen name="CartTab" component={CartStack} options={({route})=>({
        tabBarStyle:{display:getTabBarVisibility(route)}
      })} />
      <Tabs.Screen name="ChatBotTab" component={ChatBotScreen} />
      <Tabs.Screen name="ProfileTab" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};

// Function to dynamically hide tab bars in specific screens
const getTabBarVisibility = (route)=>{
  const routeName = getFocusedRouteNameFromRoute(route);
  console.log(routeName)
  if(routeName?.includes('Checkout') ||routeName?.includes('Payment') ){
    return 'none'
  }
  return 'flex'
}


export default TabsNavigation;

