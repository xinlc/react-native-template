import React, { useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Spinner, Button } from 'native-base';
import { Status } from '../../store/actionsTypes';
import { signIn } from '../../store/actions';
import {
  NAVIGATION_SIGNUP_PATH,
} from '../../navigation/types';
import { Text } from '../../components';


const SignInPage = ({ navigation }) => {
  const dispatch = useDispatch();
  const [form, setValues] = useState({
    email: '',
    password: '',
  });
  const status = useSelector(state => state.auth.signInStatus);
  const errorMessage = useSelector(state => state.auth.signInErrorMessage);

  useEffect(() => (() => {
    // componentWillUnmount
    // dispatch(resetAuthState());
  }), []);

  const onSignInPress = () => {
    // TODO: Do validation
    dispatch(signIn(form.email, form.password));
  };

  const renderButtons = () => {
    if (status === Status.STATUS_STATUS_LOADING) {
      return <Spinner style={[styles.defaultMargin]} />;
    }
    return (
      <View style={styles.linkContainer}>
        <Button
          block
          style={[styles.defaultMargin]}
          onPress={onSignInPress}
        >
          <Text>登录</Text>
        </Button>
        
        <TouchableOpacity
          style={[styles.defaultMargin, styles.center]}
          onPress={() => navigation.navigate(NAVIGATION_SIGNUP_PATH)}
        >
          <Text type="subheading">Create an account(Signup)</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const handleStatusChange = () => {
    if (status === Status.STATUS_ERROR) {
      return <Text type="subheading" style={styles.errorText}>{errorMessage}</Text>;
    }
    if (status === Status.STATUS_SUCCESS) {
      navigation.popToTop();
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        autoCorrect={false}
        value={form.email}
        onChangeText={value => setValues({ ...form, email: value })}
      />
      <TextInput
        autoCapitalize="none"
        secureTextEntry
        textContentType="password"
        placeholder="Password"
        autoCorrect={false}
        style={[styles.defaultMargin]}
        value={form.password}
        onChangeText={value => setValues({ ...form, password: value })}
      />
      {renderButtons()}
      {handleStatusChange()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  defaultMargin: {
    marginTop: 16,
  },
  center: {
    alignSelf: 'center',
  },
  errorText: {
    color: 'red',
  },
  linkContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch'
  }
});

SignInPage.navigationOptions = {
  title: '登录'
};

SignInPage.propTypes = {};

SignInPage.defaultProps = {};

export default SignInPage;
