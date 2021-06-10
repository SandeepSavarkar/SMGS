import React, {Component} from 'react';
import {SafeAreaView, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native';
import {View, Image} from 'react-native';
import Label from '../../ui/label';
import {Color, ThemeUtils} from '../../../utils';
import {StyleSheet} from 'react-native';

const data = [
  {
    id: 1,
    image: require('../../../assests/images/package/grooming.png'),
    name: 'GOLDEN',
    price: '₹7000',
    color: '#DFAD4D',
    line1: '15% off in every services and \n packages',
    line2: '1 Facial/Month',
    // line3: "1 Manicure & Pediure/Month",
    // line4: "1 Hair treatment/3 Month",
    line5: '1 Waxing(Female) or 1 Hair \n Massage(Male)/Month',
  },
  {
    id: 2,
    image: require('../../../assests/images/package/brushes.png'),
    name: 'SILVER',
    price: '₹5000',
    color: '#DE9248',
    line1: '15% off in every services and \n packages',
    line2: '1 Facial/Month',
    // line3: "1 Manicure & Pediure/Month",
    // line4: "1 Hair treatment/3 Month",
    line5: '1 Waxing(Female) or 1 Hair \n Massage(Male)/Month',
  },
  {
    id: 3,
    image: require('../../../assests/images/package/moustache.png'),
    name: 'BRONZE',
    price: '₹3000',
    color: '#AA4A59',
    line1: '15% off in every services and \n packages',
    line2: '1 Facial/Month',
    // line3: "1 Manicure & Pediure/Month",
    // line4: "1 Hair treatment/3 Month",
    line5: '1 Waxing(Female) or 1 Hair \n Massage(Male)/Month',
  },
];

export class SubsCard extends Component {
  state = {
    showDetails: true,
  };

  render() {
    return (
      <SafeAreaView style={{paddingLeft: 10,}}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({item}) => (
            <>
              {this.state.showDetails ? (
                <TouchableOpacity
                  onPress={() => {
                    this.setState({showDetails: !this.state.showDetails});
                  }}
                  style={{
                    alignItems: 'center',
                    justifyContentL: 'center',
                    marginRight: 10,
                    backgroundColor: item.color,
                  }}>
                  <View
                    style={[Styles.card, this.props.style]}
                    onPress={this.props.onPress}>
                    <View
                      style={{
                        borderWidth: 1,
                        borderColor: Color.WHITE_SMOKE,
                        justifyContent: 'center',
                        borderRadius: 100,
                        padding: 15,
                      }}>
                      <Image
                        style={[Styles.img, this.props.imgstyle]}
                        resizeMode="contain"
                        source={item.image}
                      />
                    </View>
                    <Label color={Color.WHITE} mt={5} mb={5}>
                      {item.name}
                    </Label>
                    <View
                      style={{
                        borderColor: Color.WHITE,
                        backgroundColor: item.color,
                        height: ThemeUtils.relativeHeight(8),
                        alignContent: 'center',
                        width: ThemeUtils.relativeWidth(40),
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderColor: Color.WHITE_SMOKE,
                        borderWidth: 1,
                      }}>
                      <Label color={Color.WHITE} bolder>
                        {item.price}
                      </Label>
                      <Label color={Color.WHITE} xsmall>
                        Per Year
                      </Label>
                    </View>
                  </View>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    this.setState({showDetails: !this.state.showDetails});
                  }}
                  style={{
                    alignItems: 'center',
                    justifyContentL: 'center',
                    marginRight: 10,
                    backgroundColor: item.color,
                  }}>
                  <View
                    style={{
                      backgroundColor: item.color,
                      height: ThemeUtils.relativeHeight(25),
                      width: ThemeUtils.relativeWidth(90),
                      justifyContent: 'center',
                    }}>
                    <View style={{alignContent: 'center', alignSelf: 'center'}}>
                      <Label
                        mb={5}
                        xsmall
                        align="center"
                        color={Color.WHITE}
                        backgroundColor={Color.BLACK}
                        padding={5}>
                        {item.line1}
                      </Label>
                      <Label
                        mb={5}
                        xsmall
                        align="center"
                        color={Color.WHITE}
                        backgroundColor={Color.BLACK}
                        padding={5}>
                        {item.line2}
                      </Label>
                    
                      <Label
                        mb={5}
                        align="center"
                        xsmall
                        color={Color.WHITE}
                        backgroundColor={Color.BLACK}
                        padding={0}>
                        {item.line5}
                      </Label>
                      <TouchableOpacity>
                        <View
                          style={{
                            backgroundColor: '#F1F1F1',
                            marginTop: 4,
                            height: ThemeUtils.relativeHeight(4),
                            justifyContent: 'center',
                            alignSelf: 'center',
                            width: ThemeUtils.relativeWidth(25),
                          }}>
                          <Label align="center" small>
                            Buy Now
                          </Label>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            </>
          )}
        />
      </SafeAreaView>
    );
  }
}

export default SubsCard;

const Styles = StyleSheet.create({
  card: {
    height: ThemeUtils.relativeHeight(25),
    width: ThemeUtils.relativeWidth(90),
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: ThemeUtils.relativeHeight(6),
    height: ThemeUtils.relativeHeight(6),
  },
});
