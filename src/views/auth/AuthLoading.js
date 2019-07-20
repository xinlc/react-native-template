import React, { useEffect } from 'react';
import {
  View, StatusBar, StyleSheet
} from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
import { Spinner } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import {
  NAVIGATION_ACCOUNT_STACK_PATH,
  NAVIGATION_LOGIN_STACK_PATH
} from '../../navigation/types';

import { CUSTOMER_TOKEN } from '../../store/actionsTypes';

const AuthLoading = ({ navigation }) => {
  useEffect(() => {
    bootstrapAsync();
  }, []);

  const bootstrapAsync = async () => {
    try {
      const customerToken = await AsyncStorage.getItem(CUSTOMER_TOKEN);

      navigation.navigate(
        customerToken
          ? NAVIGATION_ACCOUNT_STACK_PATH
          : NAVIGATION_LOGIN_STACK_PATH
      );
    } catch (e) {
      navigation.navigate(NAVIGATION_LOGIN_STACK_PATH);
    }
  };

  return (
    <View style={styles.container}>
      <Spinner />
      <StatusBar barStyle="default" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    flexDirection: 'column'
  }
});

export default AuthLoading;
