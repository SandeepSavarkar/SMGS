import React, {Component, useState} from 'react';
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
class VerifyNumber extends Component {
  state = {
    mobile: '',
    mobileError: '',
  };
  _btnContinue = () => {
    let mobileError, isValid;
    mobileError = validation('phoneNo', this.state.mobile);

    if (mobileError != null) {
      this.setState({
        mobileError: mobileError,
      });
      isValid = false;
    } else {
      this.setState({
        mobileError: '',
      });
      isValid = true;
    }
    if (isValid) this.props.navigation.navigate(Routes.VerifyOtp);
  };
  render() {
    //  console.log(this.state.emailError);
    return (
      <SafeAreaView style={Style.container}>
        <View>
          <Header />
        </View>
        <View style={styles.formContainer}>
          <View style={styles.headings}>
            <Label xxxlarge bolder align="center">
              Verify your Phone number
            </Label>
            <Label large mt={10} align="center">
              We have sent an you an SMS with a code to number
            </Label>
          </View>
          <View style={styles.fieldContainer}>
            <FloatingInput
                        onChangeText={text => this.setState({mobile: text})}
              placeholder="Enter Mobile Number"
              keyboardType="number-pad"
              errorMessage = {this.state.mobileError}
            />
          </View>

          <View style={styles.btnContainer}>
            <Button btn_lg text="Continue" onPress={this._btnContinue}></Button>
          </View>
          {/* {(this.state.modalVisible) ?
            <Model visible={this.state.modalVisible} onPress={()=>this._hideModal()}/>
            : null } */}
        </View>
      </SafeAreaView>
    );
  }
}

export default VerifyNumber;
