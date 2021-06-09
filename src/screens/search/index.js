import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Alert,
  Image,
  SafeAreaView,
  StatusBar,
  FlatList,
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
//import {getUser} from '../../redux/action';
import Routes from '../../router/router';
import {Color, ThemeUtils} from '../../utils/';
import {ThemeProvider} from '@react-navigation/native';
import FloatingInput from '../../components/ui/floating-input';
import Button from '../../components/ui/button';
import Label from '../../components/ui/label';
import {styles} from './style';
import SideMenu from '../../components/ui/sidemenu';
import Header from '../../components/ui/header';
import {CustomDrawerContent} from '../../router/authenticated';
import HamburgerIcon from '../../components/ui/hamburger';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Ionicons';
import Style from '../../utils/CommonStyles';
import SearchBar from 'react-native-dynamic-search-bar';
import Heading from '../../components/ui/headings';
import SpecialCard from '../../components/ui/cardspl';
import ImageSwiper from '../../components/ui/swiper/';

import {Col} from 'native-base';
import CardComponent from '../../components/ui/normalcard';
import {ScrollView} from 'react-native-gesture-handler';
import DATA from '../../utils/data';
import LeafButton from '../../components/ui/leafbutton';
const Toast = ({message}) => {
  ToastAndroid.showWithGravityAndOffset(
    message,
    ToastAndroid.SHORT,
    ToastAndroid.CENTER,
    25,
    50,
  );
  return null;
};

const renderSpeacialItem = ({item}) => (
  <SpecialCard
    img={item.img}
    shopname={item.shopname}
    address={item.address}
    rating={item.rating}
    openTime={item.openTime}
  />
);

const renderTopCategories = ({item}) => (
  <CardComponent
    img={require('../../assests/images/onBoard2.jpg')}
    label="Sandy"
    style={{
      width: ThemeUtils.relativeWidth(25),
      height: ThemeUtils.relativeHeight(15),
    }}
    imgstyle={{
      width: ThemeUtils.relativeWidth(20),
      height: ThemeUtils.relativeHeight(20),
      borderRadius: 200,
    }}
  />
);
class Search extends Component {
  // componentDidMount() {
  //   this.fetchAll();
  // }

  // fetchAll = () => {
  //   this.props.getUser();
  //   Alert.alert('hihi');
  // };

  render() {
    return (
      <SafeAreaView style={Style.container}>
        <View style={styles.content}>
          <View style={styles.searchBox}>
            <SearchBar
              placeholder="Search Salon, SPA, etc"
              style={styles.searchBar}
              onPress={() => alert('onPress')}
              onChangeText={text => console.log(text)}
            />
          </View>

          <View
            style={{
              height: ThemeUtils.relativeHeight(25),
              justifyContent: 'space-evenly',
            }}>
            <Label color={Color.GREY}>Recent Searches</Label>

            <View style={styles.rsContainer}>
              <Label mt={20} recentSearch>
                Hair Style
              </Label>
              <Label mt={20} recentSearch>
                Hair Smoothing{' '}
              </Label>
              <Label mt={20} recentSearch>
                Massage
              </Label>
              <Label mt={20} recentSearch>
                Waxing and spa
              </Label>
              <Label mt={20} recentSearch>
                Hair Smoothing{' '}
              </Label>
              <Label mt={20} recentSearch>
                Massage
              </Label>
              <Label mt={20} recentSearch>
                Waxing and spa
              </Label>
              <Label mt={20} recentSearch>
                Massage
              </Label>
            </View>
          </View>
          {/* <View>
            <LeafButton btn_sm text="Leaf" onPress={()=>this.props.navigation.navigate(Routes.BookService)} />
          </View> */}
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={Style.mv}>
              <Heading
                title="Recommended Packages"
                color={Color.PRIMARY_DARK}
                subtitle="View all"
              />
              <FlatList
                data={DATA}
                renderItem={renderSpeacialItem}
                keyExtractor={item => item.id}
                horizontal={true}
              />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

{
  function mapStateToProps(state) {
    return {
      data: state.user,
    };
  }
  const mapDispatchToProps = dispatch =>
    bindActionCreators(
      {
        getUser,
      },
      dispatch,
    );
}

export default Search;
