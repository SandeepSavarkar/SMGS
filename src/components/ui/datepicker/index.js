import React, {useState} from 'react';
import {View, Button, Platform, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Color, ThemeUtils} from '../../../utils';
import Label from '../../ui/label/'
import Icon from 'react-native-vector-icons/FontAwesome';

export const DatePicker = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  console.log('=================date===================');
  console.log(date);
  console.log('====================================');
  return (
    <View style={{marginHorizontal: ThemeUtils.relativeWidth(2)}}>
      <TouchableOpacity onPress={showDatepicker}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems:'center',
            borderWidth: 1,
            borderRadius: 5,
            padding:5,
            paddingHorizontal:10,
            height: ThemeUtils.relativeHeight(7),
          }}>
          {/* <La small>Select</Label> */}
          <Label large>Select booking date</Label>
          <Icon
            name="calendar"
            size={20}
          color={Color.PRIMARY_DARK}
          />
        </View>
      </TouchableOpacity>
      {/* <View>
        <Button  style={{backgroundColor:'red'}} onPress={showDatepicker} title="Show date picker!" />

<Button onPress={showTimepicker} title="Show time picker!" />
      </View> */}
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
          style={{backgroundColor: Color.INPUT_BACKGROUND}}
        />
      )}
    </View>
  );
};
