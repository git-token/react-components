'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

var _index = require('./components/index');

var _store = require('./store');

var _app = require('../app.config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _jsx(_reactRouterDom.BrowserRouter, {}, void 0, _jsx(_reactRedux.Provider, {
  store: _store.store
}, void 0, _jsx('div', {}, void 0, _jsx(_reactRouterDom.Switch, {}, void 0, _jsx(_reactRouterDom.Route, {
  exact: true,
  path: '/',
  component: _index.Main
})))));

window.addEventListener('load', function () {

  if (typeof window.web3 !== 'undefined') {
    window.web3 = new _web2.default(window.web3.currentProvider);
  } else {
    window.web3 = new _web2.default(new _web2.default.providers.HttpProvider(_app.web3Provider));
  }

  _reactDom2.default.render(_ref, document.getElementById('app'));
});