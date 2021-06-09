import {StyleSheet} from 'react-native';
import { ThemeUtils } from '.';
import {Color} from './Color';

const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
  },
  content_center: {
    width:ThemeUtils.relativeWidth(90)
,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fd:{
    flexDirection:'row'
  },
  mv:{
    marginVertical:ThemeUtils.relativeHeight(1)
  },
  shadowStyle: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.75,
    elevation: 5,
  },
});

export default Style;
