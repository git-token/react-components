'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _hls = require('hls.js');

var _hls2 = _interopRequireDefault(_hls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx('h1', {}, void 0, 'GitToken Developer Live Stream');

var HlsStreamComponent = function (_Component) {
  _inherits(HlsStreamComponent, _Component);

  function HlsStreamComponent() {
    _classCallCheck(this, HlsStreamComponent);

    return _possibleConstructorReturn(this, (HlsStreamComponent.__proto__ || Object.getPrototypeOf(HlsStreamComponent)).call(this));
  }

  _createClass(HlsStreamComponent, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var dispatch = this.props.dispatch;

      dispatch({ type: 'SET_MEDIA_DETAILS', id: 'streamLive', value: true });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          dispatch = _props.dispatch,
          _props$Media = _props.Media,
          streamUrl = _props$Media.streamUrl,
          streamLive = _props$Media.streamLive;


      if (_hls2.default.isSupported()) {
        var hls = new _hls2.default();
        hls.loadSource(streamUrl);
        hls.on(_hls2.default.Events.ERROR, function (event, data) {
          if (data.fatal) {
            switch (data.type) {
              case _hls2.default.ErrorTypes.NETWORK_ERROR:
                dispatch({ type: 'SET_MEDIA_DETAILS', id: 'streamLive', value: false });
                hls.destroy();
                break;
              case _hls2.default.ErrorTypes.MEDIA_ERROR:
                console.log("fatal media error encountered, try to recover");
                hls.recoverMediaError();
                break;
              default:
                // cannot recover
                hls.destroy();
                break;
            }
          }
        });

        hls.attachMedia(this.videoNode);
        hls.on(_hls2.default.Events.MANIFEST_PARSED, function (parsed) {});
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props$Media2 = this.props.Media,
          streamUrl = _props$Media2.streamUrl,
          streamLive = _props$Media2.streamLive;


      if (streamLive) {
        return _jsx('div', {
          'data-vjs-player': true
        }, void 0, _jsx('center', {}, void 0, _ref, _react2.default.createElement('video', { ref: function ref(node) {
            _this2.videoNode = node;
          }, autoPlay: true, controls: true, data: '{}' })));
      } else {
        return null;
      }
    }
  }]);

  return HlsStreamComponent;
}(_react.Component);

var mapStoreToProps = function mapStoreToProps(store, props) {
  return {
    Media: store.Media
  };
};

var HlsStream = (0, _reactRedux.connect)(mapStoreToProps)(HlsStreamComponent);

exports.default = HlsStream;