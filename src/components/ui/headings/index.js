import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import Label from '../label';
import {Color, ThemeUtils} from '../../../utils';
import ToggleSwitch from '../switch';
class Heading extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginHorizontal: ThemeUtils.relativeWidth(2),
          marginVertical: ThemeUtils.relativeHeight(1),
          //  marginBottom:ThemeUtils.relativeWidth(1.3)
        }}>
        <Label xlarge bold color={this.props.color}>
          {this.props.title}
        </Label>
        {this.props.toggle ? (
          <ToggleSwitch />
        ) : (
          <Label small>{this.props.subtitle}</Label>
        )}
      </View>
    );
  }
}

export default Heading;
