'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _victory = require('victory');

var _index = require('../Themes/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TokenSupplyChartComponent = function (_Component) {
  _inherits(TokenSupplyChartComponent, _Component);

  function TokenSupplyChartComponent() {
    _classCallCheck(this, TokenSupplyChartComponent);

    return _possibleConstructorReturn(this, (TokenSupplyChartComponent.__proto__ || Object.getPrototypeOf(TokenSupplyChartComponent)).call(this));
  }

  _createClass(TokenSupplyChartComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      var registry = this.props.registry;


      return _jsx('div', {
        style: { textAlign: 'center', color: '#fff' }
      }, void 0, _jsx('div', {
        style: {
          height: '250px',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          margin: 'auto',
          marginBottom: '-20px'
        }
      }, void 0, _jsx(_victory.VictoryChart, {
        scale: { x: 'time', y: 'linear' },
        theme: _index.VictoryTheme
      }, void 0, _jsx(_victory.VictoryGroup, {
        style: {
          data: { strokeWidth: 3, fillOpacity: 0.4 }
        }
      }, void 0, _jsx(_victory.VictoryArea, {
        style: {
          data: { fill: "cyan", stroke: "cyan" }
        },
        data: [{ x: new Date().getTime() + 2 * 1000 * 60 * 60, y: 2 }, { x: new Date().getTime() + 3 * 1000 * 60 * 60, y: 3 }, { x: new Date().getTime() + 5 * 1000 * 60 * 60, y: 5 }, { x: new Date().getTime() + 4 * 1000 * 60 * 60, y: 4 }, { x: new Date().getTime() + 7 * 1000 * 60 * 60, y: 7 }]
      })))));
    }
  }]);

  return TokenSupplyChartComponent;
}(_react.Component);

var mapStoreToProps = function mapStoreToProps(store, props) {
  return {
    Registry: store.Registry
  };
};

var TokenSupplyChart = (0, _reactRedux.connect)(mapStoreToProps)(TokenSupplyChartComponent);

exports.default = TokenSupplyChart;