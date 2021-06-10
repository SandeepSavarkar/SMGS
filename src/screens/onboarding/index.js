import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { styles } from './style';
import Swiper from 'react-native-swiper';
import Routes from '../../router/router';
import { CommonActions } from '@react-navigation/native';
import OnBoard from './OnBoard';
import { Color } from '../../utils';
const { width, height } = Dimensions.get('window');
class OnBoarding extends Component {

  state = {
    swiperIndex: 0,
    data: [
      {
        heading: "Find and Book Services",
        subheadings: "Find and book Barber,Salon & SPA services anywhere anytime",
        image: require('../../assests/images/onBoard1.jpg'),
        btnText: "Next"
      },
      // {
      //   heading: "Find and Book Services",
      //   subheadings: "Find and book Barber,Salon & SPA services anywhere anytime",
      //   image: require('../../assests/images/onBoard1.jpg'),
      //   btnText: "Next"
      // },
      {
        heading: "Style that fits your Lifestyle",
        subheadings: "Find and book Barber,Salon & SPA services anywhere anytime",
        image: require('../../assests/images/onBoard2.jpg'),
        btnText: "Get Started"
      },
    ]
  }
  resetToNotAuth = CommonActions.reset({
    index: 0,
    routes: [{ name: Routes.notAuthenticated }],
  });

  onPressNext = (index) => {
    if (this.state.data.length - 1 == index)
      this.props.navigation.dispatch(this.resetToNotAuth)
    else {
      this.refs.swiper.scrollBy(1)
    }
  }

  render() {
    return (
      <Swiper
        ref={'swiper'}
        index={this.state.swiperIndex}
        style={styles.wrapper}
        onIndexChanged={index => { console.log(index, "-------"); this.setState({ swiperIndex: index }); }}
        dot={
          <View
            style={{
              backgroundColor: 'white',
              width: 13,
              height: 13,
              borderRadius: 7,
              marginLeft: 7,
              marginRight: 7,
              marginBottom: 260
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
              marginBottom: 260
            }}
          />
        }
        paginationStyle={{
          bottom: 70,
        }}
        loop={false}>
        {
          this.state.data.map((item, index) => (
            <View key={index} style={styles.slide}>
              <OnBoard
                heading={item.heading}
                subheadings={item.subheadings}
                image={item.image}
                btnText={item.btnText}
                onPress={() => this.onPressNext(index)}
              />
            </View>
          ))
        }

      </Swiper>
    );
  }
}

export default OnBoarding;
