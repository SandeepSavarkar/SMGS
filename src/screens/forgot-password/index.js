import React, {Component} from 'react';
import {
  View,
  Text,
  Alert,
  SafeAreaView,
  Image,
  Modal,
  Pressable,
} from 'react-native';
import Header from '../../components/ui/header';
import Style from '../../utils/CommonStyles';
import Styles from '../../utils/CommonStyles';
import {styles} from './style';
import Label from '../../components/ui/label';
import FloatingInput from '../../components/ui/floating-input';
import Button from '../../components/ui/button';
import {validation} from '../../utils/ValidationUtils';
import Routes from '../../router/router';
import Model from '../../components/ui/model';
import {Color} from '../../utils';
class ForgotPassword extends Component {
  state = {
    email: '',
    emailError: '',
    modalVisible: false,
  };

  sendEmailRequest = () => {
    console.log('modal is opened');
    this.setState({modalVisible: true});
    // return (
    //   <View>
    //     <Modal
    //       animationType="slide"
    //       transparent={true}
    //       visible={this.state.modalVisible}
    //       onRequestClose={() => {
    //         Alert.alert('Modal has been closed.');
    //         setModalVisible(!this.state.modalVisible);
    //       }}>
    //       <View style={styles.centeredView}>
    //         <View style={styles.modalView}>
    //           <Text style={styles.modalText}>Hello World!</Text>
    //           <Pressable
    //             style={[styles.button, styles.buttonClose]}
    //             onPress={() =>
    //               this.setState({modalVisible: !this.state.modalVisible})
    //             }>
    //             <Text style={styles.textStyle}>Hide Modal</Text>
    //           </Pressable>
    //         </View>
    //       </View>
    //     </Modal>
    //     <Pressable
    //       style={[styles.button, styles.buttonOpen]}
    //       onPress={() =>
    //         this.setState({modalVisible: !this.state.modalVisible})
    //       }>
    //       <Text style={styles.textStyle}>Show Modal</Text>
    //     </Pressable>
    //   </View>
    // );
  };

  // const {email, password} = this.state;
  //let devideId = await DeviceInfo.getUniqueId();
  //let deviceInfo = await DeviceInfo.getModel();
  // this.setState({visibility: true}, () => {
  //   let param = {
  //     email: email,
  //     password: password,
  //android_id: devideId,
  //  device_info: deviceInfo,
  // app_type: 'parent',
  // };

  //this.props.navigation.navigate({name: 'Auth', params: param});
  // new APIRequest.Builder()
  //   .post()
  //   .setReqId(API_LOGIN)
  //   .reqURL(ApiURL.login)
  //   .jsonParams(param)
  //   .response(this.onResponse)
  //   .error(this.onError)
  //   .build()
  //   .doRequest();
  // });
  _btnResetClick = () => {
    console.log('Btn clicked');
    let emailError;
    let isValide = true;

    emailError = validation('email', this.state.email);
    if (emailError != null) {
      this.setState({
        emailError: emailError,
        shakeVal: true,
      });
      isValide = false;
      // setTimeout(() => this.setState({ shakeVal: false, showToast: false }), 2500);
    } else {
      this.setState({
        emailError: '',
      });
      isValide = true;
    }
    if (isValide) {
      this.sendEmailRequest();
    }
  };

  _hideModal = () => {
    this.setState({modalVisible : false})
  }
  render() {
    console.log(this.state.emailError);
    return (
      <SafeAreaView style={Style.container}>
        <View>
          <Header />
        </View>
        <View style={styles.formContainer}>
          <View style={styles.headings}>
            <Label xxxlarge bolder align="center">
              Forgot Password
            </Label>
            <Label large mt={10} align="center">
              Please enter your email address.You will receive an code to create
              a new password via email.
            </Label>
          </View>
          <View style={styles.fieldContainer}>
            <FloatingInput
              onChangeText={text => this.setState({email: text})}
              errorMessage={this.state.emailError}
              placeholder="Email"
            />
          </View>

          <View style={styles.btnContainer}>
            <Button
              btn_lg
              text="Reset Password"
              onPress={this._btnResetClick} ></Button>
          </View>
          {(this.state.modalVisible) ?
            <Model visible={this.state.modalVisible} onPress={()=>this._hideModal()}/>
            : null }
        </View>
      </SafeAreaView>
    );
  }
}

export default ForgotPassword;
