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

var _metamaskLogo = require('metamask-logo');

var _metamaskLogo2 = _interopRequireDefault(_metamaskLogo);

var _reactBootstrap = require('react-bootstrap');

var _ProfileIcon = require('../ProfileIcon');

var _ProfileIcon2 = _interopRequireDefault(_ProfileIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx(_reactBootstrap.Row, {}, void 0, _jsx(_reactBootstrap.Col, {
  sm: 12
}, void 0, _jsx('center', {}, void 0, _jsx('h1', {}, void 0, 'Verify Account Details'))));

var _ref2 = _jsx('br', {});

var _ref3 = _jsx('strong', {}, void 0, 'Ethereum Address');

var _ref4 = _jsx('strong', {}, void 0, 'GitHub Username:');

var _ref5 = _jsx('strong', {}, void 0, 'Agree to GitToken Terms of Service:');

var _ref6 = _jsx('br', {});

var VerifyAccountComponent = function (_Component) {
  _inherits(VerifyAccountComponent, _Component);

  function VerifyAccountComponent() {
    _classCallCheck(this, VerifyAccountComponent);

    return _possibleConstructorReturn(this, (VerifyAccountComponent.__proto__ || Object.getPrototypeOf(VerifyAccountComponent)).call(this));
  }

  _createClass(VerifyAccountComponent, [{
    key: 'verify',
    value: function verify() {
      var _props = this.props,
          dispatch = _props.dispatch,
          account = _props.Actions.account,
          address = _props.Account.address;


      var username = 'Ryanmtate';
      dispatch(account.verifyAccount({ username: username, address: address }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props$Account = this.props.Account,
          address = _props$Account.address,
          profile = _props$Account.profile;

      // const { username, _json: { avatar_url } } = profile

      var avatar_url = "https://avatars2.githubusercontent.com/u/2837196?v=4";
      var username = "Ryanmtate";

      return _jsx('div', {}, void 0, _ref, _ref2, _jsx(_reactBootstrap.Row, {}, void 0, _jsx(_reactBootstrap.Col, {
        sm: 4
      }, void 0, _jsx('center', {}, void 0, _jsx('img', {
        width: '100%',
        src: avatar_url
      }))), _jsx(_reactBootstrap.Col, {
        sm: 8
      }, void 0, _ref3, _jsx('p', {}, void 0, _jsx('small', {}, void 0, address)), _ref4, _jsx('p', {}, void 0, _jsx('small', {}, void 0, username)), _ref5, _jsx('p', {}, void 0, _jsx('small', {}, void 0, true ? 'true' : 'false')))), _ref6, _jsx(_reactBootstrap.Row, {}, void 0, _jsx(_reactBootstrap.Col, {
        sm: 12
      }, void 0, _jsx(_reactBootstrap.Button, {
        bsSize: 'lg',
        bsStyle: 'primary',
        onClick: this.verify.bind(this),
        block: true
      }, void 0, 'Sign Account Details'))));
    }
  }]);

  return VerifyAccountComponent;
}(_react.Component);

var mapStoreToProps = function mapStoreToProps(store, props) {
  return {
    Account: store.Account,
    Actions: store.Actions
  };
};

var VerifyAccount = (0, _reactRedux.connect)(mapStoreToProps)(VerifyAccountComponent);

exports.default = VerifyAccount;