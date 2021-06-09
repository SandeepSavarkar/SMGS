import { Row } from 'native-base';
import {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Color, ThemeUtils} from '../../../utils';

export const styles = StyleSheet.create({
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  headings: {
    marginVertical: ThemeUtils.relativeHeight(3),
    width: ThemeUtils.relativeWidth(85),
  },
  fieldContainer: {
    width: ThemeUtils.relativeWidth(85),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnContainer: {
    justifyContent: 'space-around',
    alignSelf:'center',
    paddingVertical: ThemeUtils.relativeHeight(3),
    width: ThemeUtils.relativeWidth(85),
  },

  lblContainer: {
    justifyContent: 'flex-start',
    marginTop: ThemeUtils.relativeHeight(10),
  },

  otpBox: {
    justifyContent:'space-around',
    fontWeight: '600',
    alignSelf: 'center',
    paddingHorizontal: 18,
    fontSize: 20,
    height: ThemeUtils.relativeHeight(8),
    width: '20%',
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: Color.DARK_GRAY,
    backgroundColor:Color.INPUT_BACKGROUND
  },
resendlbl : {
  flexDirection: 'row',
  marginTop: ThemeUtils.relativeHeight(5)
}

});
