import {StyleSheet} from 'react-native';
import {Color, ThemeUtils} from '../../../utils';

export const styles = StyleSheet.create({
  card: {
    height: ThemeUtils.relativeHeight(20),
    width: ThemeUtils.relativeWidth(85),
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
     marginHorizontal:ThemeUtils.relativeWidth(2),
     marginVertical:ThemeUtils.relativeHeight(1)
    },
  container: {
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',

  },
  img: {
    borderRadius: 10,
    width: ThemeUtils.relativeWidth(33),
    height: ThemeUtils.relativeHeight(17),
    marginVertical: 10,
  },
  shopDetails: {
    width:ThemeUtils.relativeWidth(50),
    marginLeft: 10,
    justifyContent: 'space-around',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
