import React, {Component} from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from './router.js';
import Login from '../screens/login';
import Auth from '../auth'
import SignUp from '../screens/signup'
import ForgotPassword from "../screens/forgot-password";
import VerifyNumber from "../screens/verify-number";
import VerifyOtp from "../screens/verify-number/verify-otp";

const Stack = createStackNavigator();

class notAuthenticated extends Component {
  render() {  
    return (
      <Stack.Navigator>
        
        <Stack.Screen options={{headerShown:false}} name={Routes.Login} component={Login} />
        <Stack.Screen name={Routes.Auth} component={Auth} />
        <Stack.Screen options={{headerShown:false}} name={Routes.SignUp} component={SignUp} />
        <Stack.Screen options={{headerShown:false}} name={Routes.ForgotPassword} component={ForgotPassword} />
        <Stack.Screen options={{headerShown:false}} name={Routes.VerifyNumber} component={VerifyNumber} />
        <Stack.Screen options={{headerShown:false}} name={Routes.VerifyOtp} component={VerifyOtp} />
      </Stack.Navigator>
    );
  }
}

export default notAuthenticated;
