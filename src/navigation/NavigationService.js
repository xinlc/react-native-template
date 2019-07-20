import { NavigationActions } from 'react-navigation';

let navigator;

function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

function navigate(routeName, params) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

function popToTop() {
  navigator._navigation.popToTop(); // eslint-disable-line
}

function goBack() {
  navigator._navigation.goBack(); // eslint-disable-line
}

export default {
  navigate,
  popToTop,
  goBack,
  setTopLevelNavigator,
};
