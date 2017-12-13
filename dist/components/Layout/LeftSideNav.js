'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactBootstrap = require('react-bootstrap');

var _MainLogo = require('gittoken-svg-icons/dist/MainLogo');

var _MainLogo2 = _interopRequireDefault(_MainLogo);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx('h6', {}, void 0, 'Registry');

var _ref2 = _jsx('h6', {}, void 0, 'Analysis');

var _ref3 = _jsx('h6', {}, void 0, 'Auction');

var _ref4 = _jsx('h6', {}, void 0, 'Exchange');

var _ref5 = _jsx('h6', {}, void 0, 'Torvalds');

var _ref6 = _jsx('h6', {}, void 0, 'Network');

var _ref7 = _jsx('h6', {}, void 0, 'Developers');

var _ref8 = _jsx('h6', {}, void 0, 'My Tokens');

var _ref9 = _jsx('h6', {}, void 0, 'Verify');

var _ref10 = _jsx('h6', {}, void 0, 'Acount');

var LeftSideNavComponent = function (_Component) {
  _inherits(LeftSideNavComponent, _Component);

  function LeftSideNavComponent() {
    _classCallCheck(this, LeftSideNavComponent);

    return _possibleConstructorReturn(this, (LeftSideNavComponent.__proto__ || Object.getPrototypeOf(LeftSideNavComponent)).call(this));
  }

  _createClass(LeftSideNavComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var dispatch = this.props.dispatch;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          dispatch = _props.dispatch,
          expandLeftSideNav = _props.Layout.expandLeftSideNav;


      return _jsx('div', {}, void 0, _jsx(_reactBootstrap.Panel, {
        style: {
          backgroundColor: 'rgba(0, 0, 0, 0.33)',
          margin: '5px',
          borderStyle: 'solid',
          borderColor: '#e95420',
          height: '715px'
        },
        collapsible: true,
        expanded: true
      }, void 0, _jsx(_reactBootstrap.Button, {
        bsSize: 'sm',
        bsStyle: 'info',
        block: true
      }, void 0, _jsx(_list2.default, {
        style: { color: '#e95420', display: 'inline-block', fontSize: '28px' }
      }), _ref), _jsx(_reactBootstrap.Button, {
        bsSize: 'sm',
        bsStyle: 'info',
        block: true
      }, void 0, _jsx(_cogs2.default, {
        style: { color: '#e95420', display: 'inline-block', fontSize: '28px' }
      }), _ref2), _jsx(_reactBootstrap.Button, {
        bsSize: 'sm',
        bsStyle: 'info',
        block: true
      }, void 0, _jsx(_handOUp2.default, {
        style: { color: '#e95420', display: 'inline-block', fontSize: '28px' }
      }), _ref3), _jsx(_reactBootstrap.Button, {
        bsSize: 'sm',
        bsStyle: 'info',
        block: true
      }, void 0, _jsx(_random2.default, {
        style: { color: '#e95420', display: 'inline-block', fontSize: '28px' }
      }), _ref4), _jsx(_reactBootstrap.Button, {
        bsSize: 'sm',
        bsStyle: 'info',
        block: true
      }, void 0, _jsx(_codeFork2.default, {
        style: { color: '#e95420', display: 'inline-block', fontSize: '28px' }
      }), _ref5, _ref6), _jsx(_reactBootstrap.Button, {
        bsSize: 'sm',
        bsStyle: 'info',
        block: true
      }, void 0, _jsx(_code2.default, {
        style: { color: '#e95420', display: 'inline-block', fontSize: '28px' }
      }), _ref7), _jsx(_reactBootstrap.Button, {
        bsStyle: 'info',
        block: true
      }, void 0, _jsx(_folderOpenO2.default, {
        style: { color: '#e95420', display: 'inline-block', width: '100%', height: '28px' }
      }), _ref8), _jsx(_reactBootstrap.Button, {
        bsStyle: 'info',
        block: true
      }, void 0, _jsx(_github2.default, {
        style: { color: '#e95420', display: 'inline-block', width: '100%', height: '28px' }
      }), _ref9, _ref10)));
    }
  }]);

  return LeftSideNavComponent;
}(_react.Component);

var mapStoreToProps = function mapStoreToProps(store, props) {
  return {
    Layout: store.Layout
  };
};

var LeftSideNav = (0, _reactRedux.connect)(mapStoreToProps)(LeftSideNavComponent);

exports.default = LeftSideNav;