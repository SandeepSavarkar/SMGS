import React, {Component} from 'react';
import {Platform, StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {NavigationContainer, CommonActions} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Routes from '../router/router';
//import DrawerNavigation from '../DrawerNavigation/DrawerNavigation'
//import Login from '../screens/login';
//import Home from '../Screens/Home';

class Auth extends Component {
  state = {
    email: '',
    password: '',
  };

  resetToAuth = CommonActions.reset({
    index: 0,
    routes: [{name: Routes.Authenticated}],
  });
  checkAuth = async () => {
    let obj = {
      email: 'sandysawarkar20@gmail.com',
      password: '1998',
    };

    AsyncStorage.setItem('user', JSON.stringify(obj));
    try {
      let user = await AsyncStorage.getItem('user');
      let parsed = JSON.parse(user);
      //debugger
      console.log(parsed);
      if (
        parsed.email === this.state.email &&
        parsed.password === this.state.password
      )
        this.props.navigation.dispatch(this.resetToAuth);
      else {
        alert('Email or password is invalid');
        this.props.navigation.navigate(Routes.Login);
      }
    } catch (error) {
      alert(error);
      this.props.navigation.navigate(Routes.Login);
    }
  };

  componentDidMount() {
    const {email, password} = this.props.route.params;
    console.log(email, password);
    this.setState({email: email, password: password});

    this.checkAuth();
  }

  render() {
    //const {email, password} = this.props.route.params;
    // console.log(email + ' ' + password);

    //const u = JSON.stringify(email)

    //const email1 = JSON.stringify(email)

    return <View></View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default Auth;
