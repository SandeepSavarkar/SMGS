import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image, Alert} from 'react-native';

import Label from '../label';
import {styles} from './style';
import {Color, ThemeUtils} from '../../../utils';
import Button from '../button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Radios from '../radio';
import Style from '../../../utils/CommonStyles';
const data = [{label: '', value: 0}];
export default class PaymentCard extends Component {
  render() {
    return (
      <View>
        <View
          style={[styles.card, this.props.style]}
          onPress={this.props.onPress}>
          <View style={styles.container}>
            {this.props.paymentType ? (
              <View style={{flexDirection:'row',justifyContent:'space-around',width:'100%'}}>
                <View >
                  <Image
                    style={[styles.img, this.props.imgstyle]}
                    resizeMode="cover"
                    source={this.props.img}
                  />
                </View>
                <View  style={{justifyContent:'center',alignItems:'center'}}>
                  <Label
                    color={this.props.labelColor}
                    xlarge
                    small
                    bolder
                    >
                    {this.props.paymentType}
                  </Label>
                  <Label
                    color={this.props.labelColor}
                    small
                    // 
                    >
                    {this.props.subtitle}
                  </Label>
                </View>
                <View  style={{justifyContent:'center',alignItems:'center'}}>
                  <Radios data={data} />
                </View>
              </View>
            ) : (
                <View>
                <View>
                <Image
                  style={[styles.img, this.props.imgstyle]}
                  resizeMode="cover"
                  source={this.props.img}
                />
              </View> 
              <View style={styles.shopDetails}>
                <Label
                  color={this.props.labelColor}
                  xlarge
                  small
                  bolder
                  >
                  {this.props.shopname}
                </Label>
                <Label
                  color={this.props.labelColor}
                  lighter
                  >
                  {this.props.address}
                </Label>
                <View style={styles.ratingContainer}>
                  <Icon
                    name="star"
                    size={22}
                    lighter
                    color={Color.PRIMARY_DARK}
                  />
                  <Label
                    color={this.props.labelColor}
                    small
                    lighter
                    >
                    {this.props.rating}
                  </Label>
                </View>

                <View style={styles.timeContainer}>
                  <Label
                    color={this.props.labelColor}
                    xxsmall
                    >
                    {this.props.openTime}
                  </Label>
                  {/* <View style={{backgroundColor:'blue'}}> */}
                  {this.props.total ? (
                    <Label
                      color={this.props.labelColor}
                      xxsmall
                      >
                      {this.props.openTime}
                    </Label>
                  ) : (
                    <Button
                      btn_xs
                      text="Book"
                      style={{marginRight: ThemeUtils.relativeWidth(50)}}
                      onPress={() => Alert.alert('Hii')}
                    />
                  )}

                  {/* </View> */}
                </View>
              </View>
              </View>
            )}

            <View></View>
          </View>
        </View>
      </View>
    );
  }
}
