import {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Color, ThemeUtils} from '../../utils';

export const styles = StyleSheet.create({
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'column',
      
  },
  headings: {
    marginVertical: ThemeUtils.relativeHeight(3),
    width: ThemeUtils.relativeWidth(85),

  },
  fieldContainer: {
    width:ThemeUtils.relativeWidth(85),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnContainer: {
    justifyContent: 'space-around',
    paddingVertical: ThemeUtils.relativeHeight(3),
    width: ThemeUtils.relativeWidth(85),
  },

  lblContainer: {
    justifyContent: 'flex-start',
    marginTop: ThemeUtils.relativeHeight(10),
  },



});
