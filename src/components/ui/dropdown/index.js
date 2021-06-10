import {useState, Component} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import React from 'react';
import {Color, ThemeUtils} from '../../../utils';
import {Alert} from 'react-native';

let sortBy = [
  {label: 'cost low-to-high', value: 'cost low-to-high'},
  {label: 'cost high-to-low', value: 'cost high-to-low'},
];

const services = [
  {label: 'Waxing', value: 'banana'},
  {label: 'Haic c', value: 'appbdfb'},
  {label: 'Waxbdf', value: 'banbdfab'},
];

const distance = [
  {label: 'under 5 km', value: 'banana'},
  {label: 'under 10 km', value: 'appbdfb'},
  {label: 'under 20 km', value: 'banbdfab'},
];
const rating = [
  {label: '5 star', value: 'banana'},
  {label: '4 star', value: 'appbdfb'},
  {label: '3 star', value: 'banbdfab'},
  {label: '2 star', value: 'appb cv '},
  {label: '1 star', value: 'banb'},
];

const DropDown = props => {
  let data = null;
  let border = 0;
  if (props.sortBy) {
    data = sortBy;
  } else if (props.distance) {
    data = distance;
  } else if (props.rating) {
    data = rating;
  } else {
    data = services;
  }

  if (props.br) {
    border = 1;
  }
  const [open, setOpen] = useState(false);

  const [value, setValue] = useState(null);
  const [items, setItems] = useState(data);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      multiple={true}
      min={0}
      max={5}
      // onChangeSearchText={Alert.alert('sandhy')}
      //modalContentContainerStyle={{marginHorizontal:ThemeUtils.relativeWidth(2),marginLeft:100}}
      style={{
        marginHorizontal: ThemeUtils.relativeWidth(2),
        padding: 0,
        borderWidth: border,
        marginTop: 0,
        backgroundColor: Color.WHITE,
      }}
    />
  );
};
export default DropDown;
