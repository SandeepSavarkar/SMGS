import {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Color, ThemeUtils} from '../../utils';
export const styles = StyleSheet.create({
  formContainer: {
    flex: 2,
    backgroundColor: Color.WHITE,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
  },

  headings: {
    marginVertical: ThemeUtils.relativeHeight(3),
  },

  fieldContainer: {
    alignContent: 'center',
    width: ThemeUtils.relativeWidth(85),
  },

  btnContainer: {
    justifyContent: 'space-around',
    alignItems:'center',
    paddingVertical: ThemeUtils.relativeHeight(3),
    width: ThemeUtils.relativeWidth(85),
  },

  lblContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: ThemeUtils.relativeHeight(5),
  },
});
