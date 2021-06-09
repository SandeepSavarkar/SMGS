import {StyleSheet, Dimensions} from 'react-native';
import {Color, ThemeUtils} from '../../utils';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  wrapper: {
    // backgroundColor: '#f00'
  },

  slide: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
  },

  imgBackground: {
    width,
    height,
    backgroundColor: 'transparent',
    position: 'absolute',
  },

  image: {
    width,
    height,
  },
});
