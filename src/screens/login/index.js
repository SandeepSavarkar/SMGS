import React, { Component } from 'react';
import { View, Text, Alert, SafeAreaView, Image } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import Style from '../../utils/CommonStyles';
import Styles from '../../utils/CommonStyles';
import {connect} from 'react-redux';
import {styles} from './style';
import Label from '../../components/ui/label';
import FloatingInput from '../../components/ui/floating-input';
import Button from '../../components/ui/button';
import {validation} from '../../utils/ValidationUtils';
import Routes from '../../router/router';
import { Color } from '../../utils';
import * as Animatable from 'react-native-animatable';
import { loginUserAction } from '../../redux/reducer/login/action';
import { color } from 'react-native-reanimated';
import { CommonActions } from '@react-navigation/native';
import { bindActionCreators } from 'redux';

class Login extends Component {
  state = {
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
    checked: false,
    shakeVal: false,
    visibility: false,
    showToast: false,
    tostmsg: '',
  };

  fetchAll = param => {
    this.props.loginUserAction(param, this.props,
      cbError = (err) => {
        debugger
      },
      cbSucess = (res) => {
        debugger
      });
  };

  resetToAuth = CommonActions.reset({
    index: 0,
    routes: [{ name: Routes.Authenticated }],
  });
  loginUserRequest = async () => {
    console.log('login User clicked');
    

    console.log('============Value of State=================');
    console.log(this.props.data);
    console.log('====================================');


    const { email, password } = this.state;
    //let devideId = await DeviceInfo.getUniqueId();
    //let deviceInfo = await DeviceInfo.getModel();
    this.setState({ visibility: true }, () => {
      let param = {
        email: email,
        password: password,
        //android_id: devideId,
        //  device_info: deviceInfo,
        app_type: 'parent',
      };

      this.fetchAll(param);
      console.log('============Login===============');
      // let token = this.props.data.user.token;
      console.log('====================================');
      setTimeout(() => {
        //this.props.navigation.dispatch(this.resetToAuth);
        if (1>0) {
          this.props.navigation.dispatch(this.resetToAuth);
          //console.log(this.props.data)

        } else {
          console.log('=============Token not fetch=================');
          console.log('User is not existed');
          console.log('====================================');
        }
      }, 1000);

      // Alert.alert("'")
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
    });
  };
  _btnLoginClick = () => {
    console.log('Btn clicked');
    let emailError, passError;
    let isValide = true;

    emailError = validation('email', this.state.email);
    passError = validation('password', this.state.password);
    if (emailError != null || passError != null) {
      this.setState({
        emailError: emailError,
        passwordError: passError,
        shakeVal: true,
      });
      isValide = false;
      // setTimeout(() => this.setState({ shakeVal: false, showToast: false }), 2500);
    } else {
      this.setState({
        emailError: '',
        passwordError: '',
        isLoaderVisible: true,
      });
      isValide = true;
    }
    if (isValide) {
      this.loginUserRequest();
    }
  };
  render() {
    //console.log(this.props.data.user);
    return (
      <SafeAreaView style={Style.container}>
        <View style={Style.container}>
          <Image
            style={{ height: 500, width: '100%' }}
            source={require('../../assests/images/loginBG.jpg')}
          />
        </View>
        <Animatable.View animation="zoomInUp" style={styles.formContainer}>
          <View style={styles.headings}>
            <Label xxxlarge bolder>
              WELCOME BACK
            </Label>
            <Label small align="center">
              Login into your account?
            </Label>
          </View>
          <View style={styles.fieldContainer}>
            <FloatingInput
              onChangeText={text => this.setState({ email: text })}
              errorMessage={this.state.emailError}
              placeholder="Email"
            />
            <FloatingInput
              onChangeText={text => this.setState({ password: text })}
              errorMessage={this.state.passwordError}
              placeholder="Password"
            />
          </View>

          <View style={styles.btnContainer}>
            <Button btn_lg text="Login" onPress={this._btnLoginClick}></Button>
            <Label
              large
              align="center"
              mt={30}
              onPress={() =>
                this.props.navigation.navigate(Routes.ForgotPassword)
              }>
              Forgot your Password?
            </Label>
          </View>

          <View style={styles.lblContainer}>
            <View style={{ flexDirection: 'row' }}>
              <Label large>Didn't have an account?</Label>
              <Label
                large
                color={Color.DARK_BLACK}
                onPress={() => this.props.navigation.navigate(Routes.SignUp)}>
                Sign Up
              </Label>
            </View>
          </View>
        </Animatable.View>
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.login.user,
  };
}
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loginUserAction,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Login);
