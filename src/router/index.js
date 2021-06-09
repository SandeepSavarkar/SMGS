import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from '../router/router';
import SplashScreen from '../screens/splashscreen/';
import Authenticated from './authenticated';
import Auth from '../auth/';
import notAuthenticated from './notAuthenticated';
import OnBoarding from '../screens/onboarding';

const Stack = createStackNavigator();
export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={Routes.SplashScreen}>
        <Stack.Screen
          name={Routes.OnBoarding}
          component={OnBoarding}></Stack.Screen>
        <Stack.Screen name={Routes.SplashScreen} component={SplashScreen} />
        <Stack.Screen name={Routes.Authenticated} component={Authenticated} />

        <Stack.Screen
          name={Routes.notAuthenticated}
          component={notAuthenticated}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
