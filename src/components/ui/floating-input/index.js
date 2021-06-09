import React, {Component} from 'react';
import {View, TextInput} from 'react-native';
import {PasswordValidate} from '../../../utils';
import {Color} from '../../../utils/Color';
import Label from '../label';

class FloatingInput extends Component {
  render() {
    // let stylesArray = [];
    // if (this.props.small) stylesArray.push({width:'10%'})
    // else stylesArray.push({width:'100%'});

    // stylesArray.push({
    //   marginTop: this.props.mt,
    //   marginBottom: this.props.mb,
    //   marginStart: this.props.ms,
    //   marginEnd: this.props.me,
    //   textAlign: this.props.align,
    //   lineHeight: this.props.lineHeight,
    // });

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
            fontSize: 18,
            width:'100%',
            borderWidth: 0,
            backgroundColor: Color.INPUT_BACKGROUND,
            borderRadius: 25,
            color: Color.BLACK,
            marginTop:2
          }}
          keyboardType={this.props.keyboardType}
          placeholderTextColor={Color.TEXT_PRIMARY}
          placeholder={placeholder}
          onChangeText={this.props.onChangeText}
        />
        <Label mt={3} sofia_medium style={[this.props.style]} xsmall color={Color.RED}>
          {this.props.errorMessage}
        </Label>
      </View>
    );
  }
}

export default FloatingInput;
