import {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Color, ThemeUtils} from '../../utils';
export const styles = StyleSheet.create({
  detContainer: {
    flex: 4,
    backgroundColor: Color.WHITE,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
  },
  container: {
    marginHorizontal: ThemeUtils.relativeWidth(4),
    paddingVertical: ThemeUtils.relativeHeight(2),
  },
  serviceContainer: {
    width: ThemeUtils.relativeWidth(96),
  },
  tryOnContainer: {
    width: ThemeUtils.relativeWidth(96),
    marginVertical: ThemeUtils.relativeHeight(2),
  },
  dtContainer: {
    marginHorizontal: ThemeUtils.relativeWidth(2),
  },
  genContainer: {
    height: ThemeUtils.relativeHeight(10),
    //  marginTop:ThemeUtils.responsiveHeight(30),
    justifyContent: 'space-around',
    width: ThemeUtils.relativeWidth(96),
  },
  headings: {
    marginVertical: ThemeUtils.relativeHeight(2),
  },

  fieldContainer: {
    alignContent: 'center',
    width: ThemeUtils.relativeWidth(85),
  },

  btnContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: ThemeUtils.relativeHeight(3),
    width: ThemeUtils.relativeWidth(85),
  },

  lblContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: ThemeUtils.relativeHeight(5),
  },
});
