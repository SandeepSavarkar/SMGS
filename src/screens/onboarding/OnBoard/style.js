import {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Color, ThemeUtils} from '../../../utils';
export const styles = StyleSheet.create({
  
  formContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop:ThemeUtils.relativeHeight(60),
    
  },

  headings: {
    width:ThemeUtils.relativeWidth(90),
    marginVertical:ThemeUtils.relativeWidth(10),
    alignItems:'center'
      // marginVertical: ThemeUtils.relativeHeight(3),
  },

  fieldContainer: {
    alignContent: 'center',
    // width: ThemeUtils.relativeWidth(85),
  },

  btnContainer: {
    justifyContent: 'space-around',
    alignItems:'center',
    // backgroundColor:'red',
    paddingVertical: ThemeUtils.relativeHeight(5),
    width: ThemeUtils.relativeWidth(85),
  },

  lblContainer: {
    justifyContent: 'flex-end',
    marginBottom: ThemeUtils.relativeHeight(5),
  },
  imageContainer:{
    flex:1,
    justifyContent:'flex-start'
  }
});
