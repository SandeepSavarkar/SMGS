import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {Color} from '../../../utils/Color';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types'
import Styles from "../../../utils/CommonStyles/";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Style from '../../../utils/CommonStyles';

const Button = props => {
  let stylesArray = [];
  let btnContainer=[]

  let btnContainerStylesArray = [];
  
  let btnTextStylesArray = [];
  if (props.btn_xs) {
    btnContainerStylesArray.push({
      paddingHorizontal: Platform.OS == 'ios' ? 10 : 20,
      paddingVertical: 8,
      width:'20%',
      height: 30,
    });
    btnTextStylesArray.push({
      fontSize: hp(1.5),
      fontFamily: Platform.OS == 'ios' ? 'SofiaPro' : 'Sofia-Pro-Regular-Az',
    });
    //  btnContainer.push({
    //   width:'20%',
    //   height: 30, 
    //  })
  } else if (props.btn_sm) {
    btnContainerStylesArray.push({
      paddingHorizontal: Platform.OS == 'ios' ? 10 : 20,
      paddingVertical: 10,
      width:'50%'
    });
    btnTextStylesArray.push({
      fontSize: hp(2.2),
      fontFamily: Platform.OS == 'ios' ? 'SofiaPro' : 'Sofia-Pro-Regular-Az',
    });
  } else if (props.btn_lg) {
    btnContainerStylesArray.push({
      paddingHorizontal: Platform.OS == 'ios' ? 10 : 20,
      paddingVertical: 12,
      width:'95%'
    });
    btnTextStylesArray.push({
      fontSize: hp(2.6),
      fontFamily: Platform.OS == 'ios' ? 'SofiaPro' : 'Sofia-Pro-Regular-Az',
    });
  } else if (props.btn_xl) {
    btnContainerStylesArray.push({
      paddingHorizontal: Platform.OS == 'ios' ? 10 : 20,
      paddingVertical: 13,
    });
    btnTextStylesArray.push({
      fontSize: hp(3),
      fontFamily: Platform.OS == 'ios' ? 'SofiaPro' : 'Sofia-Pro-Regular-Az',
    });
  }else {
    btnContainerStylesArray.push({
      paddingHorizontal: Platform.OS == 'ios' ? 10 : 20,
      paddingVertical: 12,
      //width:'100%'
    });
    btnTextStylesArray.push({
      fontSize: hp(2),
      fontFamily: Platform.OS == 'ios' ? 'SofiaPro' : 'Sofia-Pro-Regular-Az',
    });
    
  }
  btnTextStylesArray.push({ color: props.textColor ,alignSelf:'center'});

  btnContainerStylesArray.push({
    // width: '100%',
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10
  })
  
  return (
      <TouchableOpacity onPress={props.onPress} style={[Style.content_center]}>
        <LinearGradient
          colors={[Color.PRIMARY_DARK, Color.PRIMARY]}
          style={[btnContainerStylesArray,props.style]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <Text style={btnTextStylesArray}>
            {props.text}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
  );
};
//Button.propTypes = {};
Button.propTypes = {
  textColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    borderColor: PropTypes.string,
    btn_xs: PropTypes.bool,
    btn_sm: PropTypes.bool,
    btn_lg: PropTypes.bool,
    btn_xl: PropTypes.bool,
    btn_block: PropTypes.bool,
    border_radius: PropTypes.number
};
Button.defaultProps = {
  textColor: Color.WHITE,
  backgroundColor: Color.PRIMARY,
  btn_xs: false,
  btn_sm: false,
  btn_lg: false,
  btn_xl: false,
  btn_block: false,
  border_radius: 5,
};
export default Button;
