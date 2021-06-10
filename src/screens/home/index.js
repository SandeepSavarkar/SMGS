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
import CardComponent from '../../components/ui/normalcard';
import ImageSwiper from '../../components/ui/swiper/';

import {Col} from 'native-base';

import {ScrollView} from 'react-native-gesture-handler';
import DATA, {topCategory,usersData} from '../../utils/data';
import LeafButton from '../../components/ui/leafbutton';
import SubsCard from '../../components/ui/subs-card';


class Home extends Component {
  // componentDidMount() {
  //   this.fetchAll();
  // }

  // fetchAll = () => {
  //   this.props.getUser();
  //   Alert.alert('hihi');
  // };

  renderSpeacialItem = (item) => (
    <SpecialCard
      img={item.img}
      shopname={item.shopname}
      address={item.address}
      rating={item.rating}
      openTime={item.openTime}
     onPress={() => this.props.navigation.navigate(Routes.ViewSalons)}
    />
  );
  
  renderTopCategories = (item) => (
    <CardComponent
      img={item.img}
      label={item.categoryName}
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
  renderSpecialists = (item) => (
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
          <View style={styles.locationContainer}>
            <View style={Style.fd}>
              <Icon
                name="map-marker-radius-outline"
                size={20}
                color={Color.PRIMARY_DARK}
              />
              <Label bold small ms={5}>
                Burhanpur,Historical City
              </Label>
            </View>
            <View style={Style.fd}>
              <Icons
                name="ios-navigate-outline"
                size={20}
                color={Color.PRIMARY_DARK}
              />
              <Label bold small ms={5}>
                Change
              </Label>
            </View>
          </View>
          <View style={styles.searchBox}>
            <SearchBar
              placeholder="Search Salon, SPA, etc"
              style={styles.searchBar}
              onPress={() => {
                this.props.navigation.navigate(Routes.Search);
              }}
              // onChangeText={text => console.log(text)}
            />
            <View style={styles.filterContainer}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate(Routes.Filter)}>
                <Icon
                  name="filter-outline"
                  size={32}
                  color={Color.VIOLET_DARK}
                />
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={Style.mv}>
              <Heading
                title="Top Categories"
                color={Color.PRIMARY_DARK}
                subtitle="View all"
              />
              {/* <VirtualizedList> */}
              <FlatList
                data={topCategory}
                renderItem={({item})=>this.renderTopCategories(item)}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
              {/* </VirtualizedList> */}
            </View>

            <View style={Style.mv}>
              <ImageSwiper />
            </View>

            <View style={Style.mv}>
              {/* <LeafButton
                btn_xs
                text="Book "
                onPress={() =>
                  this.props.navigation.navigate(Routes.BookService)
                }
              /> */}
              <Heading
                title="Top Specialists"
                color={Color.PRIMARY_DARK}
                subtitle="View all"
              />
              <FlatList
                data={usersData}

                renderItem={({item})=>this.renderSpecialists(item)}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
            <View style={Style.mv}>
              <Heading
                title="Popular Branches Nearby"
                color={Color.PRIMARY_DARK}
                subtitle="View all"
              />
              <FlatList
                data={DATA}
                renderItem={({item})=>this.renderSpeacialItem(item)}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
  
                horizontal={true}
              />
            </View>
            <View style={Style.mv}>
              <Heading
                title="VIP Subscriptions"
                color={Color.PRIMARY_DARK}
                // subtitle="Swipe toknow mor"
              />
            <SubsCard />
            </View>
            <View style={Style.mv,{marginBottom:ThemeUtils.relativeHeight(15)}}>
              <Heading
                title="Recommended Packages"
                color={Color.PRIMARY_DARK}
                subtitle="View all"
              />
             <FlatList
                data={DATA}
                renderItem={({item})=>this.renderSpeacialItem(item)}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
            
            
          </ScrollView>
        </View>
      </SafeAreaView>

      //  <View style={Style.container}>
      //   <View style={styles.imageContainer}>
      //     <Image
      //       style={{
      //         width: '100%',
      //         height: ThemeUtils.relativeHeight(30),
      //         borderBottomLeftRadius: 100,
      //         borderBottomRightRadius: 100,
      //       }}
      //       resizeMode="cover"
      //       source={require('../../assests/images/onBoard1.jpg')}
      //     />
      //   </View>

      //    <View
      //     style={{
      //       position: 'absolute',
      //       top: 10,
      //       left: 20,
      //       flexDirection: 'row',
      //       justifyContent: 'space-between',
      //     }}>
      //     <HamburgerIcon
      //       onPress={() => this.props.navigation.toggleDrawer()}
      //       color={Color.PRIMARY}
      //     />
      //     <Icon
      //       name="filter"
      //       style={{left: ThemeUtils.relativeWidth(75)}}
      //       size={30}
      //       color={Color.PRIMARY}
      //     />
      //
      //   </View>
      //   <View style={styles.detContainer}>
      //     <Heading title="Top Branches" subtitle="View all" />
      //     <FlatList
      //       data={DATA}
      //       renderItem={renderSpeacialItem}
      //       keyExtractor={item => item.id}
      //       horizontal={true}
      //     />
      //   </View>
      //    <View style={styles.detContainer}>
      //      <Heading title="Top Branches" subtitle="View all" />
      //     <FlatList
      //        data={DATA}
      //       renderItem={renderTopCategories}
      //       keyExtractor={item => item.id}
      //       horizontal={true}
      //     />
      //   <TouchableOpacity
      //     onPress={() => this.props.navigation.navigate(Routes.ViewSalons)}>
      //     <Text>Go to View All</Text>
      //      <Text>{this.props.data.id}</Text>
      //   </TouchableOpacity>

      //    <FloatingInput onChangeText={this.fetchAll}></FloatingInput>

      //    <Button btn_lg text="Login"></Button>

      //    <Label large sofia-bold>
      //      Sandy
      //    </Label>
      //    </View>
      //  </View>
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

export default Home;
