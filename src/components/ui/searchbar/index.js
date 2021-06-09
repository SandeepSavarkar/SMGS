import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {styles} from './style';
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ThemeUtils, CommonStyle, Color} from '../../../utils/';
import FloatingInput from '../../ui/floating-input';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {placeholder, icon, onPress, isVisible} = this.props;
    return (
      <View style={styles.container}>
        <FloatingInput
          secureTextEntry={isVisible}
          style={{width: '100%'}}
          placeholder={placeholder}
          //{...rest}
        />
        <TouchableOpacity onPress={onPress}>
          <Icon
            name="search"
            size={ThemeUtils.relativeHeight(3)}
            color={Color.RED}
          />
        </TouchableOpacity>

        {/* <FloatingInput 
                    placeholder="search"
                /> */}
      </View>
    );
  }
}

SearchBar.propTypes = {
  navigation: PropTypes.object,
};

export default SearchBar;
