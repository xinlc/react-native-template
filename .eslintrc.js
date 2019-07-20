// 不知为什么不好用，暂时先用aribnb规范
// module.exports = {
//   root: true,
//   extends: '@react-native-community',
// };
module.exports = {
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'env': {
    'jest': true,
  },
  'rules': {
    'linebreak-style': 0,
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'arrow-body-style': 'off'
  },
  'globals': {
    "fetch": false
  }
}
