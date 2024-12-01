var _reactNative = require('react-native');
var _App = require('./App');
var _app = require('./app.json');

_reactNative.AppRegistry.registerComponent(_app.name, function () {
  return _App.App;
});
