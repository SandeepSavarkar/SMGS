import React, {Component} from 'react';
import {
  View,
  Text,
  Alert,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import Style from '../../utils/CommonStyles';
import Styles from '../../utils/CommonStyles';
import {styles} from './style';
import Label from '../../components/ui/label';
import FloatingInput from '../../components/ui/floating-input';
import Button from '../../components/ui/button';
import {validation, PasswordValidate} from '../../utils/ValidationUtils';
import Routes from '../../router/router';
import {Color} from '../../utils';
import {connect} from 'react-redux';
import Header from '../../components/ui/header';
import {createUser} from '../../redux/reducer/SignUp/action';
import {color} from 'react-native-reanimated';
import {bindActionCreators} from 'redux';

class SignUp extends Component {
  state = {
    name: '',
    nameError: '',
    email: '',
    emailError: '',
    mobile: '',
    mobileError: '',
    password: '',
    passwordError: '',
    confirmpassword: '',
    confirmpasswordError: '',
    passwordStrength: '',
    strengthColor: '',
  };

  strengthChecker(password) {
    if (password.length === 0) {
      return;
    }
    var matchedCase = new Array();
    matchedCase.push('[$@$!%*#?&]');
    matchedCase.push('[A-Z]');
    matchedCase.push('[0-9]');
    matchedCase.push('[a-z]');
    var ctr = 0;
    for (var i = 0; i < matchedCase.length; i++) {
      if (new RegExp(matchedCase[i]).test(password)) {
        ctr++;
      }
    }
    switch (ctr) {
      case 0:
        this.setState({passwordStrength: ' very weak'});
        this.setState({strengthColor: 'red'});
        break;
      case 1:
        this.setState({passwordStrength: ' very weak'});
        this.setState({strengthColor: 'red'});
        break;
      case 2:
        this.setState({passwordStrength: ' very weak'});
        this.setState({strengthColor: 'red'});
        break;
      case 3:
        this.setState({passwordStrength: ' medium'});
        this.setState({strengthColor: 'orange'});
        break;
      case 4:
        this.setState({passwordStrength: ' strong'});
        this.setState({strengthColor: 'green'});
        break;
    }
  }

  _createUser = param => {
    // this.props.createUser(param);
  };

  SignUpUserRequest = obj => {
    console.log(' User clicked');

    const {email, password} = this.state;
    //let devideId = await DeviceInfo.getUniqueId();
    //let deviceInfo = await DeviceInfo.getModel();
    this.setState({visibility: true}, () => {
      // let param = {
      //   email: email,
      //   password: password,
      //   //android_id: devideId,
      //   //  device_info: deviceInfo,
      //   app_type: 'parent',
      // };
      this._createUser(obj);
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
  _btnSignUpClick = () => {
    this.props.navigation.navigate(Routes.VerifyNumber);

    
    let emailError,
      passwordError,
      nameError,
      mobileError,
      confirmpasswordError,
      isValid;
    nameError = validation('name', this.state.name);
    emailError = validation('email', this.state.email);
    passwordError = validation('password', this.state.password);
    mobileError = validation('phoneNo', this.state.mobile);
    confirmpasswordError = PasswordValidate(
      this.state.password,
      this.state.confirmpassword,
    );

    if (
      nameError != null ||
      emailError != null ||
      passwordError != null ||
      mobileError != null ||
      confirmpasswordError != null
    ) {
      this.setState({
        nameError: nameError,
        emailError: emailError,
        passwordError: passwordError,
        mobileError: mobileError,
        confirmpasswordError: confirmpasswordError,

        // shakeVal: true,
      });
      isValid = false;
    } else {
      this.setState({
        fnameError: '',
        lnameError: '',
        emailError: '',
        passwordError: '',
        mobileError: '',
        confirmpasswordError: '',
        // shakeVal: true,
      });
      isValid = true;
    }

    if (isValid) {
      //let fname,lname,email,mobile,password;
      let obj = {
        name: this.state.name,
        email: this.state.email,
        mobile: this.state.mobile,
        password: this.state.password,
      };
      /*AsyncStorage.setItem('user',user);*/
      //AsyncStorage.setItem('signup', JSON.stringify(obj));
      console.log('====================================');
      console.log(obj);
      console.log('====================================');
      //this.SignUpUserRequest(obj)
//      this.props.navigation.navigate(Routes.VerifyNumber);
    }
  };
  render() {
    console.log(this.state.emailError);
    return (
      <SafeAreaView style={Style.container}>
        <View>
          <Header />
        </View>

        <KeyboardAvoidingView>
          <View style={styles.formContainer}>
            <View style={styles.fieldContainer}>
              <View style={styles.headings}>
                <Label xxxlarge>Create an Account</Label>
              </View>

              <FloatingInput
                onChangeText={text => this.setState({name: text})}
                errorMessage={this.state.emailError}
                placeholder="Name"
                
              />
              <FloatingInput
                onChangeText={text => this.setState({email: text})}
                errorMessage={this.state.emailError}
                placeholder="Email"
              />

              <FloatingInput
                onChangeText={text => this.setState({mobile: text})}
                errorMessage={this.state.mobileError}
                placeholder="Mobile"
                keyboardType="number-pad"
              />

              <FloatingInput
                onChangeText={text => this.setState({password: text})}
                errorMessage={this.state.passwordError}
                placeholder="Password"
              />

              <FloatingInput
                onChangeText={text => this.setState({confirmpassword: text})}
                errorMessage={this.state.passwordError}
                placeholder="ConfirmPassword"
              />
            </View>

            <View style={styles.btnContainer}>
              <Button
                btn_lg
                text="Sign Up"
                onPress={this._btnSignUpClick}></Button>
              <Label xsmall align="center" mt={20}>
                By continuing SignUp you are agreed to the the following Term &
                Conditions and reservations.
              </Label>
            </View>

            <View style={styles.lblContainer}>
              <View style={{flexDirection: 'row'}}>
                <Label large>Already have an account?</Label>
                <Label
                  large
                  color={Color.DARK_BLACK}
                  onPress={() => this.props.navigation.navigate(Routes.SignUp)}>
                  Login
                </Label>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
      //   <View>
      //     <Header title="Create Account" />
      //     <View style={Style.container}>
      //       <View style={fieldContainer}>

      //     </View>
      //   </View>
      // </View>
    );
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      // createUser,
    },
    dispatch,
  );

export default connect(null,mapDispatchToProps)(SignUp);
