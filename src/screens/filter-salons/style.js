import {StyleSheet} from 'react-native';
import {Color, ThemeUtils} from '../../utils/';

export const styles = StyleSheet.create({
  content: {
    width: ThemeUtils.relativeWidth(98),
    alignSelf: 'center',
  },
  locationContainer: {
    flexDirection: 'row',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal:ThemeUtils.relativeWidth(2),
    marginTop: ThemeUtils.responsiveHeight(10)
  },
});
