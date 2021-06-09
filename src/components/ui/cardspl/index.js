import React from 'react';
import {Alert, View, Image, TouchableOpacity} from 'react-native';
import Label from '../label';
import styles from './style';
import {Color, ThemeUtils} from '../../../utils';
import Button from '../button';

import Icon from 'react-native-vector-icons/Ionicons';
import LeafButton from '../leafbutton';
import Style from '../../../utils/CommonStyles';
import Routes from '../../../router/router';

const SpecialCard = props => {
  return (
    //    <View>
    <View>
      <TouchableOpacity
        style={[styles.card, props.style]}
        onPress={props.onPress}>
        <View style={styles.container}>
          <Image style={styles.img} source={props.img} resizeMode="cover" />
          <View style={styles.shopDetails}>
            <View style={styles.ratingContainer}>
              <Label
                color={props.labelColor}
                large
                bolder
                mt={ThemeUtils.relativeHeight(1)}>
                {props.shopname}
              </Label>
              <View>
                <Label
                  color={props.labelColor}
                  lighter
                  small
                  mt={ThemeUtils.relativeHeight(1)}>
                  {props.address}
                </Label>
              </View>
            </View>

            <View style={styles.btnContainer}>
              <View style={Style.fd}>
              <Icon name="star" size={22} lighter color={Color.PRIMARY} />
              <Label
                color={props.labelColor}
                small
                lighter
                mt={ThemeUtils.relativeHeight(1)}>
                {props.rating}
              </Label>
              </View >
             <LeafButton
                btn_xs
                text="Book"
              //   backgroundColor={Color.PRIMARY} 
                // style={{marginRight: ThemeUtils.relativeWidth(40)}}
          //      onPress={props.navigation.navigate(Routes.BookService)}
              onPress={props.onPress}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SpecialCard;
