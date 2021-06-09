import React, {useEffect, useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import Button from '../button';
import {styles} from './style';
import Label from '../label';
import {Color} from '../../../utils';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';

const getContent = props => {
  console.log(props);
  if (props.hairfilter) {
   
    return
    <View>
      <Animatable.View animation="bounceInUp" style={{alignItems: 'center'}}>
        <Icon
          name="checkmark-circle-outline"
          size={100}
          color={Color.PRIMARY_DARK}
        />
      </Animatable.View>
      <Button btn_lg text={props.btn_msg1} onPress={props.onPress} />
      <Button btn_lg text={props.btn_msg2} onPress={props.onPress} />
    </View>;
  }

  if (props.payment) {
    return (
      <View>
        <Animatable.View animation="bounceInUp" style={{alignItems: 'center'}}>
          <Icon
            name="checkmark-circle-outline"
            size={100}
            color={Color.PRIMARY_DARK}
          />
        </Animatable.View>

        <Label xxlarge bolder align="center" color={Color.WHITE}>
          Salon booked successfully.
        </Label>
        <Label large mt={10} color={Color.WHITE} align="center">
          Please reach the salon on tha alloted time.
        </Label>
      </View>
    );
  } 
  else {
    return (
      <View>
        <Label xxlarge bolder align="center" color={Color.WHITE}>
          Code has been sent to reset a new password.
        </Label>
        <Label large mt={10} color={Color.WHITE} align="center">
          You will shortly receive an code to create a new password.
        </Label>
      </View>
    );
  }
};

const Model = props => {
  useEffect (()=>{
    getContent(props);
  })

  console.log('Under Modal');
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          // setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            
            {getContent(props)}
            {props.btn_msg1 ? (
              <Button btn_lg text="Done" onPress={props.onPress} />
            ) : (
              <Button btn_lg text="Done" onPress={props.onPress} />
            )}
          </View>
        </View>
      </Modal>
      {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}
    </View>
  );
};

export default Model;
