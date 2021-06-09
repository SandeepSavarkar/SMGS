import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import Asyncstorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';
import Routes from '../../router/router';
import Style from '../../utils/CommonStyles';
import {styles} from './styles';
import Label from '../../components/ui/label';
class SplashScreen extends Component {
  resetToAuth = CommonActions.reset({
    index: 0,
    routes: [{name: Routes.Authenticated}],
  });

  resetToNotAuth = CommonActions.reset({
    index: 0,
    routes: [{name: Routes.notAuthenticated}],
  });

  componentDidMount = async () => {
    let obj = {
      name: 'sandy',
    };
    Asyncstorage.setItem('user1', JSON.stringify(obj));
    //Asyncstorage.removeItem('user');
    try {
      let user = await Asyncstorage.getItem('user1');
      let token = JSON.parse(user);

      console.log(token);

      if (token != null) this.goTo(true);
      else this.goTo(false);
    } catch (error) {
      alert(error);
    }
  };
  goTo = value => {
    if (value) {
      setTimeout(() => {
        // this.props.navigation.dispatch(this.resetToAuth);
        this.props.navigation.push(Routes.OnBoarding);
      }, 2000);
    } else {
      setTimeout(() => {
        this.props.navigation.dispatch(this.resetToNotAuth);
      }, 2000);
    }
  };
  render() {
    return (
      <View style={Style.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assests/images/Splash.jpg')}
            style={styles.logo}
            resizeMode="cover"
          />
        </View>
          {/* <Label style={styles.copyrights} large align='center'>
            Copyright@7SIZZERS.All rights are reserved
          </Label> */}
      </View>
    );
  }
}

export default SplashScreen;
