import React from 'react';
import {
  TouchableHighlight,
  Text,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Color} from '../../../utils/Color';
import PropTypes from 'prop-types';

import LinearGradient from 'react-native-linear-gradient';
import {View} from 'react-native';
class LeafButton extends React.Component {
  onClick = () => {
    if (this.props.click) this.props.click();
  };

  render() {
    let btnContainerStylesArray = [];
    let btnTextStylesArray = [];
    if (this.props.btn_xs) {
      btnContainerStylesArray.push({
        paddingHorizontal: Platform.OS == 'ios' ? 10 : 20,
        // paddingVertical: 8,
        width: '50%',
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
      });
      btnTextStylesArray.push({
        fontSize: hp(1.8),
        fontFamily: Platform.OS == 'ios' ? 'SofiaPro' : 'Sofia-Pro-Regular-Az',
      });
    } else if (this.props.btn_sm) {
      btnContainerStylesArray.push({
        paddingHorizontal: Platform.OS == 'ios' ? 10 : 20,
        paddingVertical: 10,
        width: '40%',
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
      });
      btnTextStylesArray.push({
        fontSize: hp(2),
        fontFamily: Platform.OS == 'ios' ? 'SofiaPro' : 'Sofia-Pro-Regular-Az',
      });
    } else if (this.props.btn_lg) {
      btnContainerStylesArray.push({
        paddingHorizontal: Platform.OS == 'ios' ? 10 : 20,
        paddingVertical: 12,
        width: '50%',
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
      });
      btnTextStylesArray.push({
        fontSize: hp(2.2),
        fontFamily: Platform.OS == 'ios' ? 'SofiaPro' : 'Sofia-Pro-Regular-Az',
      });
    } else if (this.props.btn_xl) {
      btnContainerStylesArray.push({
        paddingHorizontal: Platform.OS == 'ios' ? 10 : 20,
        paddingVertical: 13,
        width:'80%',
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
      });
      btnTextStylesArray.push({
        fontSize: hp(2),
        fontFamily: Platform.OS == 'ios' ? 'SofiaPro' : 'Sofia-Pro-Regular-Az',
      });
    } else {
      btnContainerStylesArray.push({
        paddingHorizontal: Platform.OS == 'ios' ? 10 : 20,
        paddingVertical: 12,
        width: '100%',
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
      });
      btnTextStylesArray.push({
        fontSize: hp(2),
        fontFamily: Platform.OS == 'ios' ? 'SofiaPro' : 'Sofia-Pro-Regular-Az',
      });
    }
    let btnWholeStyles = [];
    btnWholeStyles.push({
      marginTop: this.props.mt,
      marginBottom: this.props.mb,
      marginStart: this.props.ms,
      marginEnd: this.props.me,
    });
    if (this.props.btn_block) {
      btnWholeStyles.push({
        alignSelf: 'stretch',
      });
    }



    // let borderColor = this.props.borderColor
    //   ? this.props.borderColor
    //   : this.props.backgroundColor;
    btnContainerStylesArray.push({
      backgroundColor: this.props.backgroundColor,
      //borderColor: this.props.borderColor,
      alignItems: 'center',
     // borderRadius: this.props.border_radius,
     // borderWidth: 1,
      // borderBottomWidth: 0,
      marginTop: this.props.mt,
      marginBottom: this.props.mb,
      marginStart: this.props.ms,
      marginEnd: this.props.me,
      

      // elevation: 5
    });
    btnTextStylesArray.push({color: this.props.textColor});
    return (
      <TouchableOpacity onPress={this.props.onPress} style={[btnContainerStylesArray]}>
        {this.props.image ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={this.props.image}
              resizeMode="contain"
              style={{width: 40, height: 22, justifyContent: 'center'}}
            />
            <Text style={btnTextStylesArray}>{this.props.text}</Text>
          </View>
        ) : (
          <Text allowFontScaling={false} style={btnTextStylesArray}>
            {this.props.text}
          </Text>
        )}
      </TouchableOpacity>
    );
  }
}

LeafButton.defaultProps = {
  ...TouchableHighlight.defaultProps,
  textColor: Color.VIOLET_DARK,
  backgroundColor: Color.PRIMARY,
  btn_xs: false,
  btn_sm: false,
  btn_lg: false,
  btn_xl: false,
  btn_block: false,
  border_radius: 5,
  mt: 0,
  mb: 0,
  ms: 0,
  me: 0,
};
LeafButton.propTypes = {
  ...TouchableHighlight.propTypes,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  btn_xs: PropTypes.bool,
  btn_sm: PropTypes.bool,
  btn_lg: PropTypes.bool,
  btn_xl: PropTypes.bool,
  btn_block: PropTypes.bool,
  border_radius: PropTypes.number,
  mt: PropTypes.number,
  mb: PropTypes.number,
  ms: PropTypes.number,
  me: PropTypes.number,
};
export default LeafButton;
