import React, {Component} from 'react';
import {View, TextInput, Text} from 'react-native';
import {PasswordValidate} from '../../../utils';
import {Color} from '../../../utils/Color';

class EditingInput extends Component {
  render() {
    const {placeholder} = this.props;
    console.log(placeholder);
    return (
      <View
        style={{
          alignItems: 'center',
          width: '100%',
        }}>
        <TextInput
          style={{
            paddingHorizontal: 20,
            height: 50,
            width: '100%',
            fontSize: 15,
            //borderBottomWidth: 1,
            borderRadius: 50,
            backgroundColor: Color.WHITE,
            color: Color.BLACK,
          }}
          placeholderTextColor={Color.TEXT_PRIMARY}
          placeholder={placeholder}
          onChangeText={this.props.onChangeText}
        />
        <View style={{ position: 'absolute',left:20,top:-10}}>
          <Text>{this.props.label} </Text>
        </View>
        {/* <Label
            sofia_medium
            style={}}
            xsmall
            color={Color.RED}>
            {this.props.label}
          </Label> */}
      </View>
    );
  }
}

export default EditingInput;
