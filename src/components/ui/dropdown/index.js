import {useState, Component} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import React from 'react';
import { ThemeUtils } from '../../../utils';

export default function DropDown() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Haicut', value: 'apple'},
    {label: 'Waxing', value: 'banana'},
    {label: 'Haic c', value: 'appbdfb'},
    {label: 'Waxbdf', value: 'banbdfab'},
  ]);

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
      //modalContentContainerStyle={{marginHorizontal:ThemeUtils.relativeWidth(2),marginLeft:100}}
     // style={{marginHorizontal:ThemeUtils.relativeWidth(2),padding: 0}}
    />
  );
}
