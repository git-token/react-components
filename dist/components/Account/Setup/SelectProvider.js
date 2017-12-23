'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref2 = _jsx('h1', {}, void 0, 'Select Ethereum Wallet');

var _ref3 = _jsx('br', {});

var MainComponent = function (_Component) {
  _inherits(MainComponent, _Component);

  function MainComponent() {
    _classCallCheck(this, MainComponent);

    return _possibleConstructorReturn(this, (MainComponent.__proto__ || Object.getPrototypeOf(MainComponent)).call(this));
  }

  _createClass(MainComponent, [{
    key: 'selectProvider',
    value: function selectProvider(_ref) {
      var provider = _ref.provider;
      var _props = this.props,
          dispatch = _props.dispatch,
          account = _props.Actions.account;


      switch (provider) {
        case 'metamask':
          location.href = '/setup';
          break;
        default:
          return null;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _jsx('div', {}, void 0, _ref2, _ref3, _jsx(_reactBootstrap.Button, {
        bsSize: 'lg',
        bsStyle: 'warning',
        onClick: this.selectProvider.bind(this, { provider: 'metamask' }),
        block: true
      }, void 0, 'MetaMask'), _jsx(_reactBootstrap.Button, {
        bsSize: 'lg',
        bsStyle: 'default',
        onClick: this.selectProvider.bind(this, { provider: 'ledger' }),
        block: true,
        disabled: true
      }, void 0, 'Ledger Nano'));
    }
  }]);

  return MainComponent;
}(_react.Component);

var mapStoreToProps = function mapStoreToProps(store, props) {
  return {
    Actions: store.Actions,
    Account: store.Account
  };
};

var Main = (0, _reactRedux.connect)(mapStoreToProps)(MainComponent);

exports.default = Main;