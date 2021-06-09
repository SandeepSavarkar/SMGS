import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import Label from '../label';
import {Color, ThemeUtils, CommonStyle} from '../../../utils';
import Back from '../../../assests/images/back.png';
import Routes from '../../../router/router';
import Icon from 'react-native-vector-icons/Ionicons';
const Header = props => {
  return (
    <View
      style={{
        marginHorizontal: ThemeUtils.relativeWidth(2),
        flexDirection: 'row',
        // justifyContent: props.justifyContent,
        paddingVertical: 15,
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
        <Icon name="chevron-back-outline" size={25} />
      </TouchableOpacity>
      <View style={{alignSelf: 'center'}}>
        <Label ms={ThemeUtils.relativeWidth(25)} bolder xxlarge>
          {props.title}
        </Label>
      </View>
    </View>
  );
};

export default Header;
