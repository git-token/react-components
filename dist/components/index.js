'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Layout = exports.Main = undefined;

var _Layout = require('./Layout');

var Layout = _interopRequireWildcard(_Layout);

var _Main = require('./Main.jsx');

var _Main2 = _interopRequireDefault(_Main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.Main = _Main2.default;
exports.Layout = Layout;