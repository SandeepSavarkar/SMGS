import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from './router.js';
import {Color, ThemeUtils} from '../utils/';
import Home from '../screens/home';
import Profile from '../screens/profile';
import BookService from '../screens/book-appointment';
import BookConfirm from "../screens/book-confirm";
import Nearby from '../screens/nearby';
import Label from '../components/ui/label';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import OnBoarding from '../screens/onboarding';
import {Header} from 'react-native/Libraries/NewAppScreen';
import Career from '../screens/career/';
import ViewSalons from '../screens/view-salon';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Search from '../screens/search/index.js';
import Filter from '../screens/filter/';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export function CustomDrawerContent(props) {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1.5, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../assests/images/loginBG.jpg')}
          style={{
            height: ThemeUtils.relativeHeight(30),
            width: ThemeUtils.relativeWidth(60),
            borderRadius: 120,
          }}
        />
        <Label large mt={15}>
          User Name
        </Label>
      </View>
      <View style={{flex: 2}}>
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem
            icon={() => (
              <Icon
                name="human-greeting"
                size={25}
                color={props.focused ? Color.PRIMARY : '#ccc'}
              />
            )}
            label="Career"
            onPress={() => props.navigation.navigate(Routes.Career)}
          />
          <DrawerItem
            title="Profile"
            icon={() => (
              <Icon
                name="logout"
                size={25}
                color={props.focused ? Color.PRIMARY : '#ccc'}
              />
            )}
            label="Logout"
            onPress={() => props.navigation.navigate(Routes.Profile)}
          />
          {/* <DrawerItem
            label="Toggle drawer"
            onPress={() => props.navigation.openDrawer()}
          /> */}
        </DrawerContentScrollView>
      </View>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerContentOptions={{
        activeTintColor: Color.PRIMARY,
      }}>
      <Drawer.Screen
        name={Routes.Home}
        component={Home}
        options={{
          title: 'Home',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="home"
              size={size}
              color={focused ? Color.PRIMARY : '#ccc'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={Routes.Profile}
        component={Profile}
        options={{
          title: 'Profile',
          drawerIcon: ({focused, size}) => (
            <Icons
              name="person"
              size={size}
              color={focused ? Color.PRIMARY : '#ccc'}
            />
          ),
        }}
      />
      {/* <Drawer.Screen
        name={Routes.Profile}
        component={Profile}
        options={{
          title: 'Profile',
          drawerIcon: ({focused, size}) => (
            <Icons name="person" size={size} color={focused ? Color.PRIMARY : '#ccc'} />
          ),
        }}
      /> */}
    </Drawer.Navigator>
  );
}

const HomeScreen = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.Home}>
      <Stack.Screen
        name={Routes.Home}
        options={{headerShown: false}}
        component={MyDrawer}></Stack.Screen>
      <Stack.Screen
        name={Routes.Career}
        options={{headerShown: false}}
        component={Career}></Stack.Screen>
      <Stack.Screen
        name={Routes.ViewSalons}
        options={{headerShown: false}}
        component={ViewSalons}></Stack.Screen>
      <Stack.Screen
        name={Routes.Search}
        options={{headerShown: false}}
        component={Search}></Stack.Screen>
      <Stack.Screen
        name={Routes.Filter}
        options={{headerShown: false}}
        component={Filter}></Stack.Screen>
      <Stack.Screen
        name={Routes.BookService}
        options={{headerShown: false}}
        component={BookService}></Stack.Screen>
        <Stack.Screen
        name={Routes.BookConfirm}
        options={{headerShown: false}}
        component={BookConfirm}></Stack.Screen>
    </Stack.Navigator>

    
  );
};

class Authenticated extends Component {
  render() {
    return (
      // <Stack.Navigator>
      //   <Stack.Screen name={Routes.Home}  options={{headerShown:false}} component={Home}></Stack.Screen>
      // </Stack.Navigator>

      <Tab.Navigator>
        <Tab.Screen
          name={Routes.Home}
          component={HomeScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name={Routes.Nearby}
          component={Nearby}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="map-marker" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name={Routes.BookService}
          component={BookService}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="calendar-check-outline" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name={Routes.Profile}
          component={Profile}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icons name="person" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default Authenticated;
