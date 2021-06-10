import React, {Component} from 'react';
import {View, Text, Alert, SafeAreaView, Image, FlatList} from 'react-native';
import Style from '../../utils/CommonStyles';
import Styles from '../../utils/CommonStyles';
import {connect} from 'react-redux';
import {styles} from './style';
import Label from '../../components/ui/label';
import FloatingInput from '../../components/ui/floating-input';
import Button from '../../components/ui/button';
import {validation} from '../../utils/ValidationUtils';
import Routes from '../../router/router';
import {Color, ThemeUtils} from '../../utils';
import * as Animatable from 'react-native-animatable';
import {loginUserAction} from '../../redux/reducer/login/action';
import {color} from 'react-native-reanimated';
import {CommonActions} from '@react-navigation/native';
import {bindActionCreators} from 'redux';
import Radios from '../../components/ui/radio';
import Heading from '../../components/ui/headings';
import Pickers from '../../components/ui/picker';
import DropDown from '../../components/ui/dropdown';
import DATA from '../../utils/data';
import {DatePicker} from '../../components/ui/datepicker';
import CardComponent from '../../components/ui/normalcard';
import {ScrollView} from 'react-native-gesture-handler';
import LeafButton from '../../components/ui/leafbutton';
import BackButton from '../../components/ui/backbutton';
import Model from '../../components/ui/model';
import Header from '../../components/ui/header';
import Card from '../../components/ui/card';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PaymentCard from '../../components/ui/payment-card';

const BookData = [
  {
    id: 1,
    //img: require('../../assests/images/onBoard2.jpg'),
    shopname: 'RedBox Barber',
    address: '204,Somnath Vapi, India',
    rating: '3.5',
    openTime: '8:00 a.m - 9:00 p.m',
  },
];
// const renderTopCategories = ({item}) => (
//   <CardComponent
//     // img={require('../../assests/images/onBoard2.jpg')}
//     label="Sandy"
//     style={{
//       width: ThemeUtils.relativeWidth(25),
//       height: ThemeUtils.relativeHeight(15),
//     }}
//     imgstyle={{
//       width: ThemeUtils.relativeWidth(20),
//       height: ThemeUtils.relativeHeight(10),
//       borderRadius: 200,
//     }}
//   />
// );

const BookDetail = props => {
  return (
    <View
      style={{
        marginHorizontal: 10,
        flexDirection: 'row',
      }}>
      <View>
        <Image
          style={{
            borderRadius: 10,
            width: ThemeUtils.relativeWidth(33),
            height: ThemeUtils.relativeHeight(18),
            marginVertical: 10,
          }}
          resizeMode="cover"
          source={props.img}
        />
      </View>
      <View
        style={{
          width: ThemeUtils.relativeWidth(50),
          height: ThemeUtils.relativeHeight(19),
          marginLeft: 10,
          justifyContent: 'space-around',

        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Label
            color={props.labelColor}
            xlarge
            small
            bolder
            mt={ThemeUtils.relativeHeight(1)}>
            {props.shopname}
          </Label>
          <View style={Styles.fd}>
            <Icon name="star" size={22} lighter color={Color.PRIMARY_DARK} />
            <Label
              color={props.labelColor}
              small
              lighter
              mt={ThemeUtils.relativeHeight(1)}>
              {props.rating}
            </Label>
          </View>
        </View>

        <Label
          color={props.labelColor}
          lighter
          mt={ThemeUtils.relativeHeight(1)}>
          {props.address}
        </Label>
        <View
          style={{
            ratingContainer: {
              flexDirection: 'row',
              alignItems: 'center',
            },
          }}>
          <Label large bolder mt={ThemeUtils.relativeHeight(1)}>
            Services : {props.services}
          </Label>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <Label
            color={props.labelColor}
            large
            bolder
            mt={ThemeUtils.relativeHeight(1)}>
            Total : {props.total}
          </Label>
        </View>
      </View>
    </View>
  );
};

class BookConfirm extends Component {
  state = {
    isModalVisible: false,
  };


  _hideModal = () => {
    this.setState({isModalVisible : false})
  }

  
  render() {
    console.log(this.state.isModalVisible);
    //console.log(this.props.data.user);
    return (
      <SafeAreaView style={Style.container}>
        {/* <BackButton icon="angle-left"/> */}
        <Header title="Booking details" />

        {/* <View style={Style.container}>
          <Image
            style={{height: 500, width: '100%'}}
            source={require('../../assests/images/loginBG.jpg')}
          />
        </View> */}
        <Animatable.View animation="zoomInUp" style={styles.detContainer}>
          <View>
            <View
              style={
                (Style.mv,
                {
                  flex: 1.2,
                  width: ThemeUtils.relativeWidth(96),
                  // borderBottomWidth: 1,
                  borderColor: 'rgba(0,0,0,.7)',
                  // shadowOffset: {width: 10, height: 10},
                  // shadowColor: 'black',
                  // shadowOpacity: 1.0,
                  // elevation:5,
                  // shadowRadius:2
                })
              }>
              <BookDetail
                id="1"
                img={require('../../assests/images/onBoard2.jpg')}
                shopname="RedBox Barber"
                address="204,Somnath Vapi, India"
                rating="3.5"
                openTime="8:00 a.m - 9:00 p.m"
                services="Hair Cut,Spa"
                total="$46545"
              />
              <View style={Styles.mv}>
                <Label recentSearch bold large>
                  Friday, 25,August 2019 @ 8:00 am
                </Label>
              </View>
            </View>

            <View
              style={[
                Style.mv,
                {
                  flex: 2,
                  marginTop: ThemeUtils.responsiveHeight(2),
                },
              ]}>
              <Heading title="Payment methods" />
              <ScrollView>
                <View style={Style.mv}>
                  <PaymentCard
                    img={require('../../assests/images/gpay2.png')}
                    paymentType="Google Pay"
                    subtitle="Save your time"
                    style={{
                      height: ThemeUtils.relativeHeight(8),
                      width: ThemeUtils.relativeWidth(96),
                      //marginVertical:ThemeUtils.responsiveHeight(0.5)
                    }}
                    imgstyle={{
                      width: ThemeUtils.relativeWidth(10),
                      height: ThemeUtils.relativeHeight(5),
                    }}
                  />

                  <PaymentCard
                    img={require('../../assests/images/phonep.png')}
                    paymentType="Phone Pay"
                    subtitle="Save your time"
                    style={{
                      height: ThemeUtils.relativeHeight(8),
                      width: ThemeUtils.relativeWidth(96),
                    }}
                    imgstyle={{
                      width: ThemeUtils.relativeWidth(10),
                      height: ThemeUtils.relativeHeight(5),
                    }}
                  />
                  <PaymentCard
                    img={require('../../assests/images/visa.png')}
                    paymentType="Google Pay"
                    subtitle="Upi or something"
                    style={{
                      height: ThemeUtils.relativeHeight(8),
                      width: ThemeUtils.relativeWidth(96),
                    }}
                    imgstyle={{
                      width: ThemeUtils.relativeWidth(10),
                      height: ThemeUtils.relativeHeight(5),
                    }}
                  />
                 
                </View>
                <View
                  style={{
                    marginHorizontal: ThemeUtils.relativeWidth(2),
                    alignItems: 'center',
                  }}>
                  <LeafButton
                    btn_xl
                    text="Make payment"
                    onPress={() => this.setState({isModalVisible : true})                    }
                  />
                </View>
              </ScrollView>
            </View>

            {this.state.isModalVisible ? (
              <Model
                payment="payment"
                visible={this.state.isModalVisible}
                btn_msg1=" Continue Booking"
                btn_msg2 = "Redirect to Home"
                onPress={this._hideModal}
              />
            ) : null}
            {/* <FlatList
                data={DATA}
                renderItem={renderTopCategories}
                keyExtractor={item => item.id}
                horizontal={true}
              /> */}
          </View>
        </Animatable.View>
      </SafeAreaView>
    );
  }
}

export default BookConfirm;
