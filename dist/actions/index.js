'use strict';

var _AccountActions = require('./AccountActions');

var _AccountActions2 = _interopRequireDefault(_AccountActions);

var _app = require('../../app.config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  accountActions: new _AccountActions2.default({ url: _app.url })
};