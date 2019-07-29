
# react-native-template

## Installation

```bash
npm install
react-native link
cd ios & pod install
```

## Usage

```bash

# Development server
npm start

# Build dev
# APK in android/app/build/outputs/apk/
react-native run-android 

react-native run-ios

# Build release
bash scripts/scandroid_build.sh [version] [index] [test|release]
```

## Debugger
```bash
react-devtools
adb reverse tcp:8097 tcp:8097

adb devices
adb -s <device name> reverse tcp:8081 tcp:8081
adb reverse tcp:8081 tcp:8081

adb shell input keyevent 82

```

## Documents
- [react-native](https://facebook.github.io/react-native/)
- [react-navigation](https://reactnavigation.org/docs/en/getting-started.html)
- [native-base](https://nativebase.io/)
- [axios](https://github.com/axios/axios)
- [immutable](https://github.com/immutable-js/immutable-js])
- [redux](https://github.com/reactjs/redux)
- [redux-cn](https://www.redux.org.cn)
- [react-redux](http://cn.redux.js.org/docs/react-redux/)
- [redux-sage](https://redux-saga-in-chinese.js.org)
- [icons](https://github.com/oblador/react-native-vector-icons)
- [flow](https://flow.org/)
- [flow-typed](https://github.com/flow-typed/flow-typed)
- [lodash](https://www.lodashjs.com/docs/latest)