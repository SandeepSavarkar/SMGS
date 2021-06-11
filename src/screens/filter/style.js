import {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Color, ThemeUtils} from '../../utils';
export const styles = StyleSheet.create({
  content: {
    justifyContent: 'space-around',
    marginHorizontal: ThemeUtils.relativeWidth(2),
  },
  serviceContainer: {
    // backgroundColor:'red
    marginVertical: ThemeUtils.relativeHeight(2),
  },
  priceContainer: {
   
     height: ThemeUtils.relativeHeight(15),
  },
  btnContainer: {
    marginVertical: ThemeUtils.relativeHeight(4),
    height: ThemeUtils.relativeHeight(10),
    justifyContent: 'space-around',
    backgroundColor: Color.INPUT_BACKGROUND,
    padding: 15,
    flexDirection: 'row',
    width:'100%'
    //marginBottom:ThemeUtils.relativeHeight(10),

    
  },
});
