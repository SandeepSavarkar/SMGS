import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image, Alert} from 'react-native';

import Label from '../label';
import {styles} from './style';
import {Color, ThemeUtils} from '../../../utils';
import Button from '../button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LeafButton from '../leafbutton';
import Routes from '../../../router/router';

export default class Card extends Component {
  render() {
    return (
      <View >
        <TouchableOpacity
          style={[styles.card, this.props.style]}
          onPress={this.props.onPress}>
          <View style={styles.container}>
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
                mt={ThemeUtils.relativeHeight(1)}>
                {this.props.shopname}
              </Label>
              <Label
                color={this.props.labelColor}
                lighter
                mt={ThemeUtils.relativeHeight(1)}>
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
                  mt={ThemeUtils.relativeHeight(1)}>
                  {this.props.rating}
                </Label>
              </View>

              <View style={styles.timeContainer}>
                <Label
                  color={this.props.labelColor}
                  xxsmall
                  mt={ThemeUtils.relativeHeight(1)}>
                  {this.props.openTime}
                </Label>
                {/* <View style={{backgroundColor:'blue'}}> */}
                {this.props.total ? 
                <Label
                color={this.props.labelColor}
                xxsmall
                mt={ThemeUtils.relativeHeight(1)}>
                {this.props.openTime}
              </Label> :  <LeafButton
                  btn_xs
                  text="Book"
                  style={{marginRight: ThemeUtils.relativeWidth(50)}}
                  onPress={this.props.onPress}
                />

              } 
               

                {/* </View> */}
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
