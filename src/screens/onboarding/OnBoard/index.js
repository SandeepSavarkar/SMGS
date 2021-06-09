import React, {Component} from 'react';
import {View, Text, Alert, SafeAreaView, Image} from 'react-native';
import {Header} from 'react-native/Libraries/NewAppScreen';
import Style from '../../../utils/CommonStyles';
import {styles} from './style';
import Label from '../../../components/ui/label';
import FloatingInput from '../../../components/ui/floating-input';
import Button from '../../../components/ui/button';
import {validation} from '../../../utils/ValidationUtils';
import Routes from '../../../router/router';
import {Color, ThemeUtils} from '../../../utils';
import {color} from 'react-native-reanimated';
class OnBoard extends Component {
  render() {
    
   // console.log(images);
    //console.log(typeof(images));

    return (
      <View >
        <View style={styles.imageContainer}>
          <Image
            style={{
              width: '100%',
              height: ThemeUtils.relativeHeight(50),
              borderBottomLeftRadius: 160,
              borderBottomRightRadius : 160,
            }}
            source={this.props.image}
          />
        </View>
        <View style={styles.formContainer}>
          <View style={styles.headings}>
            <Label xxxlarge bolder>
             {this.props.heading}
            </Label>
            <Label small align="center">
              {this.props.subheadings}
            </Label>
          </View>
          <View style={styles.btnContainer}>
            <Button btn_lg text={this.props.btnText} onPress={this.props.onPress}/>
          </View>
        </View>
      </View>
    );
  }
}

export default OnBoard;
