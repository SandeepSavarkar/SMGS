import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, TouchableOpacity, Image} from 'react-native';
import Label from '../label';
import { Color } from '../../../utils';
const HamburgerIcon = props => {
  //   const toggleDrawer = () => {
  //     props.onPress;
  //     //props.navigation.openDrawer()
  // };
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={props.onPress}>
        {/* <Image
          source={{
            uri:
              'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
          }}
          style={{width: 25, height: 25, marginLeft: 150}}
        /> */}
        <Icon name="bars" size={30} color={props.color} /> 
      </TouchableOpacity>
    </View>
  );
};
export default HamburgerIcon;
