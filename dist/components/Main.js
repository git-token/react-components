'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactDraggable = require('react-draggable');

var _reactDraggable2 = _interopRequireDefault(_reactDraggable);

var _reactBootstrap = require('react-bootstrap');

var _RegistryLogo = require('gittoken-svg-icons/dist/RegistryLogo');

var _RegistryLogo2 = _interopRequireDefault(_RegistryLogo);

var _MainLogo = require('gittoken-svg-icons/dist/MainLogo');

var _MainLogo2 = _interopRequireDefault(_MainLogo);

var _Register = require('gittoken-registry-ui/dist/components/Register/Register');

var _Register2 = _interopRequireDefault(_Register);

var _reactRouterDom = require('react-router-dom');

var _folderOpenO = require('react-icons/lib/fa/folder-open-o');

var _folderOpenO2 = _interopRequireDefault(_folderOpenO);

var _github = require('react-icons/lib/fa/github');

var _github2 = _interopRequireDefault(_github);

var _random = require('react-icons/lib/fa/random');

var _random2 = _interopRequireDefault(_random);

var _list = require('react-icons/lib/fa/list');

var _list2 = _interopRequireDefault(_list);

var _codeFork = require('react-icons/lib/fa/code-fork');

var _codeFork2 = _interopRequireDefault(_codeFork);

var _handOUp = require('react-icons/lib/fa/hand-o-up');

var _handOUp2 = _interopRequireDefault(_handOUp);

var _code = require('react-icons/lib/fa/code');

var _code2 = _interopRequireDefault(_code);

var _cogs = require('react-icons/lib/fa/cogs');

var _cogs2 = _interopRequireDefault(_cogs);

var _angleDown = require('react-icons/lib/fa/angle-down');

var _angleDown2 = _interopRequireDefault(_angleDown);

var _angleLeft = require('react-icons/lib/fa/angle-left');

var _angleLeft2 = _interopRequireDefault(_angleLeft);

var _index = require('./Layout/index');

var _index2 = require('./Registry/index');

var _index3 = require('./Data/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx('div', {}, void 0, _jsx('p', {}, void 0, 'Components'));

var MainComponent = function (_Component) {
  _inherits(MainComponent, _Component);

  function MainComponent() {
    _classCallCheck(this, MainComponent);

    return _possibleConstructorReturn(this, (MainComponent.__proto__ || Object.getPrototypeOf(MainComponent)).call(this));
  }

  _createClass(MainComponent, [{
    key: 'render',
    value: function render() {
      return _ref;
    }
  }]);

  return MainComponent;
}(_react.Component);

var mapStoreToProps = function mapStoreToProps(store, props) {
  return {
    Layout: store.Layout
  };
};

var Main = (0, _reactRedux.connect)(mapStoreToProps)(MainComponent);

exports.default = Main;