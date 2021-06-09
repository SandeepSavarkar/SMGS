import {StyleSheet} from 'react-native';
import Color from '../../../utils/Color';
import ThemeUtils from '../../../utils/ThemeUtils';

const styles = StyleSheet.create({
  card: {
    height: ThemeUtils.relativeHeight(27),
    width: ThemeUtils.relativeWidth(45),
    //borderRadius: 10,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 10,
    backgroundColor: '#fff',
    elevation: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowColor: '#000',
    marginHorizontal: ThemeUtils.relativeWidth(2),
  },

  container: {
    flexDirection: 'column',
    //borderRadius: 12,
   // marginRight: 10,
  },
  img: {
    borderTopLeftRadius: 20,
    height: ThemeUtils.relativeHeight(16),
    width: ThemeUtils.relativeWidth(45),
  },
  shopDetails: {
    marginLeft: 10,
    //backgroundColor:'blue'
   // justifyContent: 'space-evenly',
  },
  ratingContainer: {
    alignItems: 'flex-start',
    //marginLeft : ThemeUtils.relativeWidth(2)
  },
  rating: {
    alignSelf: 'center',
    flexDirection: 'row',
backgroundColor:'red'
  },
  detailsContaier: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    // marginVertical:5,
    marginTop: 5,
    width: '100%',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:5
    // marginHorizontal:ThemeUtils.relativeWidth(2)
  },
});

export default styles;
