import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ToastAndroid,
  Alert,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  FlatList,
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
//import {getUser} from '../../redux/action';
import Routes from '../../router/router';
import Style from '../../utils/CommonStyles';
import {ThemeProvider} from '@react-navigation/native';
import FloatingInput from '../../components/ui/floating-input';
import Button from '../../components/ui/button';
import Label from '../../components/ui/label';
import {Color, ThemeUtils} from '../../utils/';
import SideMenu from '../../components/ui/sidemenu';
import Header from '../../components/ui/header';
import {CustomDrawerContent} from '../../router/authenticated';
import HamburgerIcon from '../../components/ui/hamburger';
import Card from '../../components/ui/card';
import {styles} from './style';
import SpecialCard from '../../components/ui/cardspl';
// import SearchBar from '../../components/ui/searchbar';
import SearchBar from 'react-native-dynamic-search-bar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Heading from '../../components/ui/headings';
import DATA from '../../utils/data';

class NearBy extends Component {
  render() {
    const renderItem = ({item}) => (
      <Card
        img={item.img}
        shopname={item.shopname}
        address={item.address}
        rating={item.rating}
        openTime={item.openTime}
        style={{width: ThemeUtils.relativeWidth(94)}}
        onPress={() => this.props.navigation.navigate(Routes.BookService)}
      />
    );

    const renderSpeacialItem = ({item}) => (
      <SpecialCard
        img={item.img}
        shopname={item.shopname}
        address={item.address}
        rating={item.rating}
        openTime={item.openTime}
      />
    );

    return (
      <SafeAreaView style={Style.container}>
        <View style={styles.content}>
          <View style={styles.filterContainer}>
            <Label xsmall>Your Location</Label>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate(Routes.Filter)}>
              <Icon name="filter-outline" size={20} color={Color.VIOLET_DARK} />
            </TouchableOpacity>
          </View>

          <View style={styles.locationContainer}>
            <Icon
              name="map-marker-radius-outline"
              size={20}
              color={Color.PRIMARY_DARK}
            />
            <Label bolder large>
              User Location
            </Label>
          </View>
          <SearchBar
            placeholder="Search here"
            style={{
              backgroundColor: Color.INPUT_BACKGROUND,
              width: ThemeUtils.relativeWidth(96),
              marginTop: 10,
            }}
            //onPress={() => alert('onPress')}
            //onChangeText={text => console.log(text)}
          />
          <ScrollView>
            <View>
              <Heading title="Top Nearby Branches" color={Color.PRIMARY_DARK} subtitle="View all" />
              <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={false}
              />
            </View>
          </ScrollView>

          {/* <View>
          <Heading title="Top Branches" subtitle="View all"/>    
            <FlatList
              data={DATA}
              renderItem={renderSpeacialItem}
              keyExtractor={item => item.id}
              horizontal={true}
            />
          </View> */}
          {/* <IconButton btn_lgs text="Sandy"/> */}
        </View>
      </SafeAreaView>
    );
  }
}

export default NearBy;

// OTP VALIDATION
// otp: {
//   presence: {
//     message: Message.Errors.otpBlank,
//   },
//   format: {
//     pattern: /^\d{4}/,
//     message: Message.Errors.otpInvalid,
//   },
// },

// OTP VALIDATION MESSAGE
//  otpBlank: 'Please enter valid OTP',
//  otpInvalid: 'Invalid OTP, Please try again!',
