'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx('path', {
  d: 'M 550 250 L 550 350 L 350 450 L 150 350 L 150 150 L 350 50 L 550 150 L 550 250 ',
  fill: 'url(#img1)',
  strokeLinejoin: "round",
  stroke: '#cc5333',
  strokeWidth: '38'
});

var _ref2 = _jsx('circle', {
  cx: '550',
  cy: '150',
  r: '38',
  fill: '#cc5333'
});

var _ref3 = _jsx('circle', {
  cx: '550',
  cy: '150',
  r: '20',
  fill: '#fff'
});

var ProfileIconComponent = function (_Component) {
  _inherits(ProfileIconComponent, _Component);

  function ProfileIconComponent() {
    _classCallCheck(this, ProfileIconComponent);

    return _possibleConstructorReturn(this, (ProfileIconComponent.__proto__ || Object.getPrototypeOf(ProfileIconComponent)).call(this));
  }

  _createClass(ProfileIconComponent, [{
    key: 'render',
    value: function render() {
      // const { Account: { profile: { _json: { avatar_url } } } } = this.props
      var _props = this.props,
          width = _props.width,
          height = _props.height,
          style = _props.style,
          opacity = _props.opacity,
          url = _props.url,
          onClick = _props.onClick;


      opacity = opacity ? opacity : '0';
      width = width ? width : '50%';
      height = height ? height : '50%';
      style = style ? style : null;

      return _jsx('div', {
        style: { float: 'right' },
        onClick: onClick
      }, void 0, _jsx('svg', {
        width: width,
        height: height,
        viewBox: '0 0 1000 1000',
        style: style
      }, void 0, _jsx('defs', {}, void 0, _jsx('pattern', {
        id: 'img1',
        patternUnits: 'userSpaceOnUse',
        width: '60%',
        height: '60%'
      }, void 0, _jsx('image', {
        xlinkHref: url,
        x: '5%',
        y: '5%',
        width: '60%',
        height: '60%'
      }))), _ref, _ref2, _ref3));
    }
  }]);

  return ProfileIconComponent;
}(_react.Component);

var mapStoreToProps = function mapStoreToProps(store, props) {
  return {
    Actions: store.Actions
  };
};

var ProfileIcon = (0, _reactRedux.connect)(mapStoreToProps)(ProfileIconComponent);

exports.default = ProfileIcon;