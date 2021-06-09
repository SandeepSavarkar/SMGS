import React, { useState } from "react";
import { View, StyleSheet,Text } from "react-native";
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Color, ThemeUtils } from "../../../utils";

const Pickers = (props) => {
  const [selectedValue, setSelectedValue] = useState("java");
  const {container,ic,pickr} = styles;


  return (
    <View style={[styles.container,props.style]}>
      {/* <Icon name="flag-checkered"  style={styles.icon}> </Icon> */}
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        {/* <Picker.Item label="Select"  /> */}
        <Picker.Item label="Hair Cut" value="UK" />
        <Picker.Item label="Cost High to Low" value="US" />
        <Picker.Item label="$5" value="india" />
        <Picker.Item label="4 km" value="US" />
        <Picker.Item label="4 Star" value="india" />
    
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor :Color.INPUT_BACKGROUND,

  },
  picker :{
      paddingTop:0,
    //height: ThemeUtils.relativeHeight(1),
    width: ThemeUtils.relativeWidth(95) ,
    justifyContent:'flex-start'
  },
  icon :{
    position:'absolute',
    left:10,
    top:15,
    fontSize:20,
  }
});

export default Pickers;