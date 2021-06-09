import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import Header from '../../components/ui/header';
import Label from '../../components/ui/label';
import Styles from '../../utils/CommonStyles';
import {styles} from './styles';
import EditingInput from '../../components/ui/editing-input';
import Button from '../../components/ui/button';
class Profile extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Header title="Profile" />

        <View style={styles.imgContainer}>
          <Image
            source={require('../../assests/images/onBoard1.jpg')}
            style={styles.img}
          />
          <Label large mt={20}>
            User Name
          </Label>
        </View>
        <View style={styles.formContainer}>
          
          <View style={styles.fieldContainer}>
            <View >
              <EditingInput placeholder="Sandy" label="Name" />
            </View>
            <View>
              <EditingInput placeholder="sandysawarkar20@gmail.com" label="Email"/>
            </View>
            <View>
              <EditingInput placeholder="7773885303" label="Mobile"/>
            </View>
            <View>
              <EditingInput placeholder="sandy7894" label="Password" />
            </View>
            <View>  
              <Button  btn_lg text="Update"/>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Profile;
