import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
//import {styles} from './style';
import Swiper from 'react-native-swiper';
import Routes from '../../../router/';
import {CommonActions} from '@react-navigation/native';
// import OnBoard from './OnBoard';
import {Color, ThemeUtils} from '../../../utils/';

const {width, height} = Dimensions.get('window');
const DATA = [
  {
    id: 1,
    img: require('../../../assests/images/promocode.png'),
    shopname: 'RedBox Barber',
    address: '204,Somnath Vapi, India',
    rating: '3.5',
    openTime: '8:00 a.m - 9:00 p.m',
  },
  {
    id: 2,
    img: require('../../../assests/images/promocode.png'),
    shopname: 'Sancs',
    address: 'vnalvvnlsv vnsadnv',
    rating: '3.5',
    openTime: '8:00 a.m - 9:00 p.m',
  },
];
const render = () => {};
export default class ImageSwiper extends React.Component {
  render() {
    console.log('====================================');
    //  console.log(DATA);
    console.log('====================================');
    return (
      <Swiper
    
        activeDotColor={Color.PRIMARY}
        style={styles.wrapper}
        disableScrollViewPanResponder={true}     
      containerStyle={{height:ThemeUtils.relativeHeight(20)}}
        loop={false}>
        {DATA.map((item, i) => {
        
          return (
            <View  key={item.id} style={styles.slide}>
              {/* <Text> {item.id} </Text> */}
              <Image resizeMode='cover' style={{width:ThemeUtils.relativeWidth(96),height:ThemeUtils.relativeHeight(20)}}  source={item.img} />
            </View>
          );
        })}
      </Swiper>
      // <View style={styles.container}>

      //         <Swiper style={styles.swiper}
      //         horizontal={true}>
      //           <View>

      //           </View>

      //         </Swiper>
      //       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  swiper: {
    width: 200,
    height: 200,
  },
});
