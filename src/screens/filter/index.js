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
import Pickers from '../../components/ui/picker';
import RangeSliders from '../../components/ui/range-selector';
import {color} from 'react-native-reanimated';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import DropDown from '../../components/ui/dropdown';

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
class Filter extends Component {
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
          <Header title="Filter" />
          <View style={styles.serviceContainer}>
            <Label xlarge bold>
              Services
            </Label>
            <DropDown  />
          </View>

          <View style={styles.serviceContainter}>
            <Label xlarge bold mt={ThemeUtils.relativeHeight(2)}>
              Sort By
            </Label>
            <DropDown />
          </View>
          <View style={styles.priceContainer}>
            <Label xlarge bold>
              Price
            </Label>
          </View>
          <View style={styles.serviceContainer}>
            <Label xlarge bold>
              Distance
            </Label>
            <Pickers />
          </View>
          <View style={styles.serviceContainer}>
            <Label xlarge bold>
              Rating
            </Label>
            <Pickers />
          </View>
          <View style={styles.btnContainer}>
            <LeafButton
              btn_sm
              borderColor={Color.PRIMARY}
              backgroundColor={Color.INPUT_BACKGROUND}
              text="CLEAR"
            />
            <LeafButton btn_sm backgroundColor={Color.PRIMARY} text="DONE" />
          </View>

          {/* <RangeSliders /> */}
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

export default Filter;
