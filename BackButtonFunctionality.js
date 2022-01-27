<<<<<<< HEAD
import React, {useEffect, useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const RunningScreen = () => {
  const navigation = useNavigation();

  useEffect(
    () =>
      navigation.addListener('beforeRemove', event => {
        // Prevent default behavior
        event.preventDefault();

        Alert.alert(
          'Discard Details',
          'Are you sure you want to discard this?',
          [
            {text: 'No', style: 'cancel', onPress: () => {}},
            {
              text: 'Yes',
              style: 'destructive',
              onPress: () => navigation.dispatch(event.data.action),
            },
          ],
        );
      }),
    [navigation],
  );

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Press back button</Text>
    </View>
  );
};

export default RunningScreen;
=======
import React, {useEffect, useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const RunningScreen = () => {
  const navigation = useNavigation();

  useEffect(
    () =>
      navigation.addListener('beforeRemove', event => {
        // Prevent default behavior
        event.preventDefault();

        Alert.alert(
          'Discard Details',
          'Are you sure you want to discard this?',
          [
            {text: 'No', style: 'cancel', onPress: () => {}},
            {
              text: 'Yes',
              style: 'destructive',
              onPress: () => navigation.dispatch(event.data.action),
            },
          ],
        );
      }),
    [navigation],
  );

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Press back button</Text>
    </View>
  );
};

export default RunningScreen;
>>>>>>> 9737040287878a65932e2b131e993092cdf68ef9
