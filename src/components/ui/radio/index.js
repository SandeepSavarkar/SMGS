import React, {Component} from 'react';
import {View} from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import { Color, ThemeUtils } from '../../../utils';

const radio_props = [
  {label: 'Male  ', value: 0},
  {label: 'Female', value: 1},
];

class Radios extends Component {
  state = {
    value: 0,
  };
  render() {
    let data = this.props.data ?this.props.data : radio_props 
    return (
      <View style={{marginHorizontal:ThemeUtils.relativeWidth(2)}}>
        <RadioForm
          radio_props={data}
          initial={false}
          onPress={value => {
            this.setState({value: value});
          }}
          formHorizontal={true}
          labelHorizontal={true}
        
          //buttonInnerColor={Color.PRIMARY}
          buttonInnerColor='red'
          buttonOuterColor={Color.PRIMARY_DARK}
          buttonColor={Color.PRIMARY_DARK}
          animation={true}
          buttonSize={15}
          selectedButtonColor={Color.PRIMARY_DARK}
         // style={{margin:10}}                
/>
      </View>
    );
  }
}

export default Radios;
