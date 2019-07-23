/* eslint-disable */

// 禁用黄屏
console.disableYellowBox = true;

// 生产环境拦截全局异常，避免出现错误闪退。
if (!__DEV__) {
  require('ErrorUtils').setGlobalHandler((err) => {  // eslint-disable-line
    console.log(err);
  });
}

import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { ThemeProvider, theme } from './config';
import Navigator from './navigation';
import NavigationService from './navigation/NavigationService';
import store from './store';

const App = () => (
  <StoreProvider store={store}>
    <ThemeProvider theme={theme}>
      <Navigator
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    </ThemeProvider>
  </StoreProvider>
);

export default App;
