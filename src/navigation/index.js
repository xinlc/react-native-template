import React from 'react';
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  DrawerActions,
} from 'react-navigation';
import { Icon } from 'native-base';

import DrawerScreen from '../views/auth/Signup';
import CategoryTree from '../views/auth/Signup';

import HomePage from '../views/home';


import AuthLoading from '../views/auth/AuthLoading';
import SignupPage from '../views/auth/Signup';
import SignInPage from '../views/auth/Signin';
import PasswordReset from '../views/auth/PasswordReset';

import Account from '../views/account/Account';
import AddressScreen from '../views/account/AddressScreen';

import SearchScreen from '../views/search/SearchScreen';
import Product from '../views/search/Product';


import {
  NAVIGATION_HOME_STACK_PATH,
  NAVIGATION_HOME_SCREEN_PATH,
  NAVIGATION_SIGNUP_PATH,
  NAVIGATION_SIGNIN_PATH,
  NAVIGATION_ACCOUNT_PATH,
  NAVIGATION_ACCOUNT_STACK_PATH,
  NAVIGATION_LOGIN_STACK_PATH,
  NAVIGATION_AUTH_LOADING_SWITCH,
  NAVIGATION_RESET_PASSWORD_PATH,
  NAVIGATION_AUTH_STACK_PATH,
  NAVIGATION_SEARCH_SCREEN_PATH,
  NAVIGATION_SEARCH_PRODUCT_PATH,
  NAVIGATION_ADDRESS_SCREEN_PATH,
  NAVIGATION_DRAWER_SCREEN,
  BOTTOM_TAB_NAVIGATOR,
} from './types';

const HomeStack = createStackNavigator(
  {
    [NAVIGATION_HOME_SCREEN_PATH]: HomePage,
  },
  {
    initialRouteName: NAVIGATION_HOME_SCREEN_PATH,
    navigationOptions: {
      headerStyle: {
        // backgroundColor: '#f4511e',
      },
      // headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: '500',
        fontSize: 18,
        alignSelf: 'center'
      }
    }
  }
);

const AuthStack = createStackNavigator({
  [NAVIGATION_SIGNIN_PATH]: SignInPage,
  [NAVIGATION_SIGNUP_PATH]: SignupPage,
  [NAVIGATION_RESET_PASSWORD_PATH]: PasswordReset,
});

const AccountStack = createStackNavigator({
  [NAVIGATION_ACCOUNT_PATH]: Account,
  [NAVIGATION_ADDRESS_SCREEN_PATH]: AddressScreen,
});

const AccountSwitch = createSwitchNavigator({
  [NAVIGATION_AUTH_LOADING_SWITCH]: AuthLoading,
  [NAVIGATION_LOGIN_STACK_PATH]: AuthStack,
  [NAVIGATION_ACCOUNT_STACK_PATH]: AccountStack
});

const SearchStack = createStackNavigator({
  [NAVIGATION_SEARCH_SCREEN_PATH]: SearchScreen,
  [NAVIGATION_SEARCH_PRODUCT_PATH]: Product,
});


const MainAppNavigator = createBottomTabNavigator(
  {
    [NAVIGATION_HOME_STACK_PATH]: {
      screen: HomeStack,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="home" type="FontAwesome" color={tintColor} />;
        }
      })
    },
    [NAVIGATION_SEARCH_SCREEN_PATH]: {
      screen: SearchStack,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="search" type="FontAwesome" color={tintColor} />;
        }
      })
    },
    [NAVIGATION_AUTH_STACK_PATH]: {
      screen: AccountSwitch,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="user" type="FontAwesome" color={tintColor} />;
        }
      })
    },
  },
  {
    initialRouteName: NAVIGATION_AUTH_STACK_PATH,
    tabBarOptions: {
      showLabel: false
    }
  }
);

const Drawer = createDrawerNavigator({
  [BOTTOM_TAB_NAVIGATOR]: {
    screen: MainAppNavigator
  },
  [NAVIGATION_DRAWER_SCREEN]: {
    screen: DrawerScreen,
    navigationOptions: { header: null }
  },
}, {
  contentComponent: CategoryTree,
});

// const MyDrawerNavigator = createDrawerNavigator(
//   {
//     Drawer,
//   },
//   {
//     contentComponent: DrawerScreen,
//     getCustomActionCreators: (route, stateKey) => {
//       return {
//         toggleFilterDrawer: () => DrawerActions.toggleDrawer({ key: stateKey }),
//       };
//     },
//   }
// );


export default createAppContainer(Drawer);
