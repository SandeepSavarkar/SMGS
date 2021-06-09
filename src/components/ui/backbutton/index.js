import {useState, Component} from 'react';
import { View,TouchableOpacity} from 'react-native'
import React from 'react';
import Icon from "react-native-vector-icons/FontAwesome";
import { ThemeUtils,Color,CommonStyle} from '../../../utils';
 const BackButton = (props) => {
  return (
    <View
      style={{
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: props.justifyContent,
        paddingVertical: 15,
        backgroundColor: Color.BLACK,
      }}>
      <TouchableOpacity
        onPress={props.onPress}
        style={[
          {
            padding: 10,
            backgroundColor: Color.WHITE,
            borderRadius: 6,
          },
          CommonStyle.shadowStyle,
        ]}>
        <Icon name={props.iconName} color='black' size={25} />
      </TouchableOpacity>
    </View>
  );
};
export default BackButton