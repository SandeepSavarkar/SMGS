import {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Color, ThemeUtils} from '../../utils';
export const styles = StyleSheet.create({
  content:{
    marginHorizontal:ThemeUtils.relativeWidth(2),
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
    marginTop: ThemeUtils.responsiveHeight(10)
  },
  searchBox:{
    marginVertical:ThemeUtils.relativeHeight(1)
    ,flexDirection:'row',justifyContent:'space-around',
  },
  searchBar:{
    backgroundColor: Color.INPUT_BACKGROUND,
    width: ThemeUtils.relativeWidth(80),
  },
  filterContainer:{
    backgroundColor: Color.INPUT_BACKGROUND,
    borderRadius: 100,
    width: ThemeUtils.relativeWidth(10),
    justifyContent:'center',
    alignItems:'center'
  },
  imageContainer: {
    //flex: 2,
    justifyContent: 'flex-start',
    // backgroundColor: 'red',
  },

  iconContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: ThemeUtils.relativeWidth(96),

  },
  detContainer: {
      marginVertical:ThemeUtils.responsiveHeight(2)
    // justifyContent: 'flex-end',
    // alignItems: 'center',
    //marginTop: ThemeUtils.relativeHeight(60),

  },

  headings: {
    width: ThemeUtils.relativeWidth(90),
    marginVertical: ThemeUtils.relativeWidth(10),
    alignItems: 'center',
    // marginVertical: ThemeUtils.relativeHeight(3),
  },

  fieldContainer: {
    alignContent: 'center',
    // width: ThemeUtils.relativeWidth(85),
  },

  btnContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'red',
    paddingVertical: ThemeUtils.relativeHeight(5),
    width: ThemeUtils.relativeWidth(85),
  },

  lblContainer: {
    justifyContent: 'flex-end',
    marginBottom: ThemeUtils.relativeHeight(5),
  },
});
