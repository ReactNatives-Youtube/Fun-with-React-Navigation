/**
 * Add following libraries to run this React Native CLI code
 * npm install @react-navigation/stack
 * @react-native-masked-view/masked-view
 * react-native-gesture-handler
 * react-native-safe-area-context
 * react-native-screens
 * @react-navigation/material-top-tabs
 * react-native-tab-view
 * react-native-pager-view
 * @react-navigation/native
 */

import React from 'react';
import type {Node} from 'react';
import {FlatList, Image, Text, View, Pressable} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Stack = createStackNavigator();

const Tab = createMaterialTopTabNavigator();

const TabScreen1 = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <Pressable
        onPress={() => navigation.navigate('Stack1')}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Press and go to running page</Text>
      </Pressable>
    </View>
  );
};
const TabScreen2 = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <Pressable
        onPress={() => navigation.navigate('Stack2')}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Press and go to summary page</Text>
      </Pressable>
    </View>
  );
};

const Stack1Screen1 = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Running Page</Text>
    </View>
  );
};

const Stack1Screen2 = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Summary Page</Text>
    </View>
  );
};
const Stack2Screen1 = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Stack 2 Screen 2</Text>
    </View>
  );
};
const Stack2Screen2 = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Summary Page</Text>
    </View>
  );
};

const Stack1 = () => (
  <Stack.Navigator initialRouteName="Running">
    <Stack.Screen name="Running" component={Stack1Screen1} />
    <Stack.Screen
      name="Stack1Screen2"
      component={Stack1Screen2}
      options={{title: ''}}
    />
  </Stack.Navigator>
);

const Stack2 = () => (
  <Stack.Navigator initialRouteName="Summary">
    <Stack.Screen name="Summary" component={Stack2Screen1} />
    <Stack.Screen
      name="Stack2Screen2"
      component={Stack2Screen2}
      options={{title: ''}}
    />
  </Stack.Navigator>
);
const tabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Start a Run" component={TabScreen1} />
    <Tab.Screen name="Activity" component={TabScreen2} />
  </Tab.Navigator>
);

// Main Stack
const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tabs"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Tabs" component={tabs} />
        <Stack.Screen name="Stack1" component={Stack1} />
        <Stack.Screen name="Stack2" component={Stack2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
