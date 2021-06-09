import React, {Component, useState} from 'react';
import {
  View,
  Text,
  Alert,
  SafeAreaView,
  Image,
  Modal,
  Pressable,
  TextInput,
} from 'react-native';
import Header from '../../../components/ui/header';
import Style from '../../../utils/CommonStyles';
import {styles} from './style';
import Label from '../../../components/ui/label';
import FloatingInput from '../../../components/ui/floating-input';
import Button from '../../../components/ui/button';
import {validation} from '../../../utils/ValidationUtils';
import Routes from '../../../router/router';
import Model from '../../../components/ui/model';
import {Color, ThemeUtils} from '../../../utils';
class VerifyOtp extends Component {
  state = {
    otp: '',
    otpError: '',
  };
  _btnVerifyClick = () => {
    let otpError, isValid;
    otpError = validation('otp', this.state.otp);

    if (otpError != null) {
      this.setState({
        otpError: otpError,
      });
      isValid = false;
    } else {
      this.setState({
        otpError: '',
      });
      isValid = true;
    }
    if (isValid) this.props.navigation.navigate(Routes.Login);
  };
  render() {
    console.log(this.state.otp);

    return (
      <SafeAreaView style={Style.container}>
        <View>
          <Header />
        </View>
        <View style={styles.formContainer}>
          <View style={styles.headings}>
            <Label xxxlarge bolder align="center">
              Phone Verification
            </Label>
            <Label large mt={10} align="center">
              Enter your OTP code here.
            </Label>
          </View>
          <View style={styles.fieldContainer}>
            <View
              style={{
                flexDirection: 'row',
                width: ThemeUtils.relativeWidth(80),
                justifyContent: 'space-around',
              }}>
              <TextInput
                maxLength={1}
                style={styles.otpBox}
                onChangeText={text => {
                  this.setState({otp: this.state.otp + text});
                  console.log('new this.state.otp=', this.state.otp);
                }}
                keyboardType="phone-pad"
              />
              <TextInput
                maxLength={1}
                style={styles.otpBox}
                onChangeText={text => {
                  this.setState({otp: this.state.otp + text});
                  console.log('new this.state.otp=', this.state.otp);
                }}
                keyboardType="phone-pad"
              />
              <TextInput
                maxLength={1}
                style={styles.otpBox}
                onChangeText={text => {
                  this.setState({otp: this.state.otp + text});
                  console.log('new this.state.otp=', this.state.otp);
                }}
                keyboardType="phone-pad"
              />
              <TextInput
                maxLength={1}
                style={styles.otpBox}
                onChangeText={text => {
                  this.setState({otp: this.state.otp + text});
                  console.log('new this.state.otp=', this.state.otp);
                }}
                keyboardType="phone-pad"
              />
            </View>
            <Label mt={5}> {this.state.otpError}</Label>
          </View>

          <Label mt={10} small>
            00:60
          </Label>

          <View style={styles.resendlbl}>
            <Label small>Didn't recieve any code?</Label>
            <Label color={Color.PRIMARY} ms={5} small>
              Resend
            </Label>
          </View>
        </View>
        <View></View>
        <View style={styles.btnContainer}>
          <Button btn_lg text="Verify" onPress={this._btnVerifyClick}></Button>
        </View>
        {/* {(this.state.modalVisible) ?
            <Model visible={this.state.modalVisible} onPress={()=>this._hideModal()}/>
            : null } */}
      </SafeAreaView>
    );
  }
}

export default VerifyOtp;
