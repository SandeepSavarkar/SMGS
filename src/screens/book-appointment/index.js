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
import Header from '../../components/ui/header';
import Model from '../../components/ui/model';

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
      height: ThemeUtils.relativeHeight(10),
      borderRadius: 200,
    }}
  />
);
class BookService extends Component {
  state = {
    isModalVisible: false,
  };

  _hideModal = () => {
    this.setState({isModalVisible: false});
  };

  render() {
    //console.log(this.props.data.user);
    return (
      <SafeAreaView style={Style.container}>
        {/* <BackButton icon="angle-left"/> */}
        <Header
          title="Booking details"
          onPress={() => this.props.navigation.goBack()}
        />

        {/* <View style={Style.container}>
          <Image
            style={{height: 500, width: '100%'}}
            source={require('../../assests/images/loginBG.jpg')}
          />
        </View> */}
        <Animatable.View animation="zoomInUp" style={styles.detContainer}>
          <View styles={styles.container}>
            <ScrollView>
              <View style={styles.genContainer}>
                <Heading title="Gender" color={Color.PRIMARY_DARK} />
                <Radios />
              </View>
              <View style={styles.serviceContainer}>
                <Heading
                  title="Choose your services"
                  color={Color.PRIMARY_DARK}
                  subtitle="Total $35.5"
                />
                <DropDown />
              </View>

              <View style={styles.tryOnContainer}>
                <Heading
                  title="Try on"
                  color={Color.PRIMARY_DARK}
                  //  toggle
                />
                <Button
                  btn_xs
                  text="Check AI"
                  onPress={() => this.setState({isModalVisible: true})}
                />
              </View>

              <View>
                <Heading title="Select your date" color={Color.PRIMARY_DARK} />
                <DatePicker />
              </View>
              <View style={Style.mv}>
                <Heading
                  title="Select Specialist"
                  color={Color.PRIMARY_DARK}
                  subtitle="View all"
                />
                <FlatList
                  data={DATA}
                  renderItem={renderTopCategories}
                  keyExtractor={item => item.id}
                  horizontal={true}
                />
              </View>

              <View
                style={
                  (Style.mv, {marginHorizontal: ThemeUtils.relativeWidth(2)})
                }>
                <Heading
                  title="Available slots"
                  color={Color.PRIMARY_DARK}
                  //subtitle="View all"
                />
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',

                    justifyContent: 'space-between',
                    height: ThemeUtils.relativeHeight(20),
                  }}>
                  <Label mt={30} recentSearch xsmall>
                    9.00-10:00 A.M
                  </Label>
                  <Label recentSearch xsmall>
                    9.00-10:00 A.M
                  </Label>
                  <Label recentSearch xsmall>
                    9.00-10:00 A.M
                  </Label>
                  <Label recentSearch xsmall>
                    9.00-10:00 A.M
                  </Label>
                  <Label recentSearch xsmall>
                    9.00-10:00 A.M
                  </Label>
                  <Label recentSearch xsmall>
                    9.00-10:00 A.M
                  </Label>
                  <Label mt={30} recentSearch xsmall>
                    9.00-10:00 A.M
                  </Label>
                  <Label recentSearch xsmall>
                    9.00-10:00 A.M
                  </Label>
                  <Label recentSearch xsmall>
                    9.00-10:00 A.M
                  </Label>
                </View>
                <View
                  style={{
                    width: ThemeUtils.relativeWidth(90),
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <LeafButton
                    btn_xl
                    text="Continue"
                    onPress={() => {
                      this.props.navigation.navigate(Routes.BookConfirm);
                    }}
                  />
                </View>

                {/* <FlatList
                data={DATA}
                renderItem={renderTopCategories}
                keyExtractor={item => item.id}
                horizontal={true}
              /> */}

                {this.state.isModalVisible ? (
                  <Model
                    //payment="payment"
                    hairFilter="hairFilter"
                    visible={this.state.isModalVisible}
                    btn_liveCam="Open Live Camera"
                    btn_uploadImg="Upload Image"
                    onPress={() => this._hideModal()}
                  />
                ) : null}
              </View>
            </ScrollView>
          </View>
        </Animatable.View>
      </SafeAreaView>
    );
  }
}

export default BookService;
