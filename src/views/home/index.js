import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  Content,
  Text,
  Button,
} from 'native-base';
import {
  NAVIGATION_SIGNIN_PATH,
} from '../../navigation/types';

const HomePage = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // componentDidMount
    // dispatch(initializeApp());
  }, []);

  return (
    <Container>
      <Content>
        <Text>
          Hello
        </Text>
        <Button
          block
          // onPress={() => NavigationService.navigate(NAVIGATION_SIGNIN_PATH)}
          onPress={() => navigation.push(NAVIGATION_SIGNIN_PATH)}
        >
          <Text>go</Text>
        </Button>
        <Button
          block
          onPress={() => navigation.openDrawer()}
        >
          <Text>openDrawer</Text>
        </Button>
        <Button
          block
          onPress={() => navigation.closeDrawer()}
        >
          <Text>closeDrawer</Text>
        </Button>
      </Content>
    </Container>
  );
};

HomePage.navigationOptions = ({ navigation }) => ({
  title: '首页',
});

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
