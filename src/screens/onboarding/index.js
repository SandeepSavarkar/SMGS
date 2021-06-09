import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import {styles} from './style';
import Swiper from 'react-native-swiper';
import Routes from '../../router/router';
import {CommonActions} from '@react-navigation/native';
import OnBoard from './OnBoard';
import { Color } from '../../utils';
const {width, height} = Dimensions.get('window');
class OnBoarding extends Component {
  
 
  resetToNotAuth = CommonActions.reset({
    index: 0,
    routes: [{name: Routes.notAuthenticated}],
  });

  // onPressNext = () => {
  //   const {idxActive} = this.state;
  //   // Probably best set as a constant somewhere vs a hardcoded 5
  //   if (idxActive < 5) {
  //     this.refs.swiper.scrollBy(1);
  //   }
  // }


  
  render() {
    return (
      <Swiper
        style={styles.wrapper}
        dot={
          <View
            style={{
              backgroundColor: 'white',
              width: 13,
              height: 13,
              borderRadius: 7,
              marginLeft: 7,
              marginRight: 7,
              marginBottom:260
            }}
          />
        }
        showsButtons={false}
        nextButton={<Text>NExt</Text>}
        activeDot={
          <View
            style={{
              backgroundColor: 'orange',
              width: 13,
              height: 13,
              borderRadius: 7,
              marginLeft: 7,
              marginRight: 7,
              marginBottom:260
            }}
          />
        }
        paginationStyle={{
          bottom: 70,
        }}
        loop={false}>
        <View style={styles.slide}>
          <OnBoard
            heading="Find and Book Services"
            subheadings="Find and book Barber,Salon & SPA services anywhere anytime"
            image={require('../../assests/images/onBoard1.jpg')}
            btnText="Next"
            onPress={this.onPressNext}         
          />
        </View>
        <View style={styles.slide} >
          <OnBoard
            heading="Style that fits your Lifestyle"
            subheadings="Find and book Barber,Salon & SPA services anywhere anytime"
            image={require('../../assests/images/onBoard2.jpg')}
            btnText="Get Started"
            onPress={()=>this.props.navigation.dispatch(this.resetToNotAuth)}
       />
        </View>
      </Swiper>
    );
  }
}

export default OnBoarding;
