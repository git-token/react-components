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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref2 = _jsx('h3', {}, void 0, 'Data Panel');

var _ref3 = _jsx('h1', {}, void 0, 'Data');

var _ref4 = _jsx('h1', {}, void 0, 'Data');

var _ref5 = _jsx('h1', {}, void 0, 'Data');

var _ref6 = _jsx('h1', {}, void 0, 'Data');

var DataPanelComponent = function (_Component) {
  _inherits(DataPanelComponent, _Component);

  function DataPanelComponent() {
    _classCallCheck(this, DataPanelComponent);

    return _possibleConstructorReturn(this, (DataPanelComponent.__proto__ || Object.getPrototypeOf(DataPanelComponent)).call(this));
  }

  _createClass(DataPanelComponent, [{
    key: 'toggleNav',
    value: function toggleNav(_ref) {
      var id = _ref.id,
          expanded = _ref.expanded;
      var dispatch = this.props.dispatch;

      dispatch({ type: 'SET_LAYOUT_DETAILS', id: id, value: expanded });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          dispatch = _props.dispatch,
          _props$Layout = _props.Layout,
          expandHeader = _props$Layout.expandHeader,
          expandLeftSideNav = _props$Layout.expandLeftSideNav,
          expandRightSideNav = _props$Layout.expandRightSideNav;


      return _jsx('div', {}, void 0, _jsx(_reactBootstrap.Panel, {
        style: {
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          margin: '5px',
          borderStyle: 'solid',
          borderColor: '#e95420',
          height: '' + (expandHeader ? '100%' : '40px')
        },
        header: _ref2,
        onClick: this.toggleNav.bind(this, {
          id: 'expandHeader',
          expanded: !expandHeader
        }),
        bsStyle: 'secondary',
        collapsible: true,
        expanded: expandHeader,
        onMouseEnter: this.toggleNav.bind(this, {
          id: 'expandHeader',
          expanded: true
        }),
        onMouseLeave: this.toggleNav.bind(this, {
          id: 'expandHeader',
          expanded: false
        })
      }, void 0, _jsx(_reactBootstrap.Col, {
        sm: 3
      }, void 0, _jsx(_reactBootstrap.Panel, {
        style: {
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          margin: '5px',
          borderStyle: 'solid',
          borderColor: '#e95420',
          height: '150px'
        }
      }, void 0, _ref3)), _jsx(_reactBootstrap.Col, {
        sm: 3
      }, void 0, _jsx(_reactBootstrap.Panel, {
        style: {
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          margin: '5px',
          borderStyle: 'solid',
          borderColor: '#e95420',
          height: '150px'
        }
      }, void 0, _ref4)), _jsx(_reactBootstrap.Col, {
        sm: 3
      }, void 0, _jsx(_reactBootstrap.Panel, {
        style: {
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          margin: '5px',
          borderStyle: 'solid',
          borderColor: '#e95420',
          height: '150px'
        }
      }, void 0, _ref5)), _jsx(_reactBootstrap.Col, {
        sm: 3
      }, void 0, _jsx(_reactBootstrap.Panel, {
        style: {
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          margin: '5px',
          borderStyle: 'solid',
          borderColor: '#e95420',
          height: '150px'
        }
      }, void 0, _ref6))));
    }
  }]);

  return DataPanelComponent;
}(_react.Component);

var mapStoreToProps = function mapStoreToProps(store, props) {
  return {
    Layout: store.Layout
  };
};

var DataPanel = (0, _reactRedux.connect)(mapStoreToProps)(DataPanelComponent);

exports.default = DataPanel;