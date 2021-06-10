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
import Icons from 'react-native-vector-icons/Entypo';
import Style from '../../utils/CommonStyles';
import SearchBar from 'react-native-dynamic-search-bar';
import Heading from '../../components/ui/headings';
import SpecialCard from '../../components/ui/cardspl';
import ImageSwiper from '../../components/ui/swiper/';
import {Col} from 'native-base';
import CardComponent from '../../components/ui/normalcard';
import {ScrollView} from 'react-native-gesture-handler';
import {hairstyleData} from '../../utils/data';

import LeafButton from '../../components/ui/leafbutton';
import Pickers from '../../components/ui/picker';
import RangeSliders from '../../components/ui/range-selector';
import {color} from 'react-native-reanimated';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import DropDown from '../../components/ui/dropdown';
import RangeSlider from '../../components/ui/range-selector';
import {goBack} from 'react-router-redux';

class TryOn extends Component {
  // componentDidMount() {
  //   this.fetchAll();
  // }

  // fetchAll = () => {
  //   this.props.getUser();
  //   Alert.alert('hihi');
  // };
  renderSpecialists = item => (
    <CardComponent
      img={item.img}
      label={item.name}
      style={{
        width: ThemeUtils.relativeWidth(24),
        height: ThemeUtils.relativeHeight(15),
      }}
      imgstyle={{
        width: ThemeUtils.relativeWidth(20),
        height: ThemeUtils.relativeHeight(10),
        borderRadius: 200,
      }}
    />
  );

  render() {
    return (
      <SafeAreaView style={Style.container}>
        <View style={styles.content}>
          <View
            style={{
              height: ThemeUtils.relativeHeight(90),
              marginBottom: ThemeUtils.relativeHeight(2),
              justifyContent: 'space-between',
              //  backgroundColor: 'red',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: ThemeUtils.responsiveHeight(2),
              }}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Icons name="cross" size={40} color={Color.PRIMARY_DARK} />
              </TouchableOpacity>

              <Icon name="flash" size={40} color={Color.PRIMARY_DARK} />

              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Icon name="check" size={40} color={Color.PRIMARY_DARK} />
              </TouchableOpacity>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                style={{
                  height: ThemeUtils.relativeHeight(60),
                  width: ThemeUtils.relativeWidth(80),
                }}
                source={require('../../assests/images/13.jpg')}
                resizeMode="cover"
              />
            </View>
            <View>
              <View style={[Style.mv, Style.fd, {alignItems: 'center'}]}>
                <FlatList
                  data={hairstyleData}
                  renderItem={({item}) => this.renderSpecialists(item)}
                  keyExtractor={item => item.id}
                  horizontal={true}
                />
              </View>
            </View>
          </View>
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

export default TryOn;
