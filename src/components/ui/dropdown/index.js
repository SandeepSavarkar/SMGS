import {useState, Component} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import React from 'react';
import {Color, ThemeUtils} from '../../../utils';
import Style from '../../../utils/CommonStyles';
import {FlatList,View} from 'react-native';
import DATA from '../../../utils/data';
import Heading from '../headings';
import SpecialCard from '../../../components/ui/cardspl';

let sortBy = [
  {label: 'cost low-to-high', value: 'cost low-to-high'},
  {label: 'cost high-to-low', value: 'cost high-to-low'},
];

const services = [
  {label: 'Waxing', value: 'Waxing'},
  {label: 'Hair Cut', value: 'Hait Cut'},
  {label: 'HAir Smoothing', value: 'HAir Smoothing'},
];

const distance = [
  {label: 'under 5 km', value: 'under 5 km'},
  {label: 'under 10 km', value: 'under 10 km'},
  {label: 'under 20 km', value: 'under 20 km'},
];
const rating = [
  {label: '5 star', value: '5 star'},
  {label: '4 star', value: '4 star'},
  {label: '3 star', value: '3 star'},
  {label: '2 star', value: '2 star'},
  {label: '1 star', value: '1 star'},
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

  
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(data);

  const renderSpeacialItem = (item) => (
    <SpecialCard
      img={item.img}
      shopname={item.shopname}
      address={item.address}
      rating={item.rating}
      openTime={item.openTime}
     onPress={() => this.props.navigation.navigate(Routes.ViewSalons)}
    />
  );

  return (
    <View>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        multiple={props.multiple ? props.multiple : false}
        min={0}
        max={5}
        onChangeItem={item => setValue(...value,[item.value])}
        onClose={() => props.onClose ? setContent(!content) :null}
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
      <View style={{marginTop: 10} }>
        {content  ? <View style={Style.mv}>
              <Heading                title="Recommended Packages"
                color={Color.PRIMARY_DARK}
                subtitle="View all"
              />
             <FlatList
                data={DATA}
                renderItem={({item})=>renderSpeacialItem(item)}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View> : null}
      </View>
      
    </View>
  );
};
export default DropDown;
