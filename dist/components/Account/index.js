'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Setup = exports.Menu = exports.Register = exports.ProfileIcon = exports.Main = undefined;

var _ProfileIcon = require('./ProfileIcon');

var _ProfileIcon2 = _interopRequireDefault(_ProfileIcon);

var _Main = require('./Main');

var _Main2 = _interopRequireDefault(_Main);

var _Register = require('./Register');

var _Register2 = _interopRequireDefault(_Register);

var _Menu = require('./Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _index = require('./Setup/index');

var Setup = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Main = _Main2.default;
exports.ProfileIcon = _ProfileIcon2.default;
exports.Register = _Register2.default;
exports.Menu = _Menu2.default;
exports.Setup = Setup;