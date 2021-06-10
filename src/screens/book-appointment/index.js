import React, {Component} from 'react';
import {
  View,
  Text,
  Alert,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';
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
import {usersData} from '../../utils/data';
import {DatePicker} from '../../components/ui/datepicker';
import CardComponent from '../../components/ui/normalcard';
import {ScrollView} from 'react-native-gesture-handler';
import LeafButton from '../../components/ui/leafbutton';
import BackButton from '../../components/ui/backbutton';
import Header from '../../components/ui/header';
import Model from '../../components/ui/model';
import Icon from 'react-native-vector-icons/Ionicons';
import DATA from '../../utils/data';
import SpecialCard from '../../components/ui/cardspl';


renderSpeacialItem = item => (
  <SpecialCard
    img={item.img}
    shopname={item.shopname}
    address={item.address}
    rating={item.rating}
    openTime={item.openTime}
    onPress={() => this.props.navigation.navigate(Routes.BookService)}
  />
);

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
class BookService extends Component {
  state = {
    isModalVisible: false,
    imageModal: true,
  };

  _hideModal = () => {
    this.setState({isModalVisible: false});
  };

  setModalVisible = status => {
    this.setState({imageModal: true});
  };

  showPackages=() =>{
    return (
      <View style={Style.mv}>
        <Heading
          title="Recommended Packages"
          color={Color.PRIMARY_DARK}
          subtitle="View all"
        />
        <FlatList
          data={DATA}
          renderItem={({item}) => this.renderSpeacialItem(item)}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };
  
  getPic = type => {
    switch (type) {
      case 'camera':
        launchCamera(
          {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 200,
            maxWidth: 200,
          },
          response => {
            this.imageResponse(response);
          },
        );
        break;

      default:
        launchImageLibrary(
          {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 200,
            maxWidth: 200,
          },
          response => {
            this.imageResponse(response);
          },
        );
        break;
    }
  };

  ImageUploadModal = () => {
    console.log('UNder IMage MOdel----' + this.state.imageModal);
    this._hideModal();
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.imageModal}
        onRequestClose={() => this.setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalInnerContainer}>
            <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
              onPress={() => this.setModalVisible(false)}>
              <Icon
                name="close"
                size={ThemeUtils.relativeWidth(7)}
                color={Color.BLACK}
              />
            </TouchableOpacity>
            <View style={styles.modalInnerButton}>
              <TouchableOpacity
                style={styles.camereImage}
                onPress={() => this.getPic('camera')}>
                <Icon
                  name="camera"
                  size={ThemeUtils.relativeWidth(7)}
                  color={Color.BLACK}
                />
                <Text style={styles.cameraText}>Take Pic</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.camereImage}
                onPress={() => this.getPic('photo')}>
                <Icon
                  name="camera"
                  size={ThemeUtils.relativeWidth(7)}
                  color={Color.BLACK}
                />
                <Text style={styles.cameraText}>Select image</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

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
                <DropDown  onChange={()=>this.showPackages()}/>
              </View>

              <View style={styles.tryOnContainer}>
                <Heading
                  title="Try on"
                  color={Color.PRIMARY_DARK}
                  //  toggle
                />

                <TouchableOpacity
                  onPress={() => this.setState({isModalVisible: true})}>
                  <Icon name="chevron-forward-outline" size={25} />
                </TouchableOpacity>
                {/* <Button
                  btn_sm
                  text="Check AI"
                  onPress={() => this.setState({isModalVisible: true})}
                /> */}
              </View>

              <View>
                <Heading title="Select your date" color={Color.PRIMARY_DARK} />
                <DatePicker o/>
              </View>
              <View style={Style.mv}>
                <Heading
                  title="Select Specialist"
                  color={Color.PRIMARY_DARK}
                  subtitle="View all"
                />
                <FlatList
                  data={usersData}
                  renderItem={({item}) => this.renderSpecialists(item)}
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
                    onPress={() => this.ImageUploadModal()}
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
