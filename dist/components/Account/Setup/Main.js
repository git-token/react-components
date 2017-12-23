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

var _reactRouterDom = require('react-router-dom');

var _reactBootstrap = require('react-bootstrap');

var _Welcome = require('./Welcome');

var _Welcome2 = _interopRequireDefault(_Welcome);

var _VerifyAccount = require('./VerifyAccount');

var _VerifyAccount2 = _interopRequireDefault(_VerifyAccount);

var _MetaMask = require('./MetaMask');

var _MetaMask2 = _interopRequireDefault(_MetaMask);

var _TermsOfService = require('../../Legal/TermsOfService');

var _TermsOfService2 = _interopRequireDefault(_TermsOfService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx('defs', {}, void 0, _jsx('radialGradient', {
  id: 'g2',
  fx: '50%',
  fy: '50%',
  cx: '50%',
  cy: '50%',
  r: '50%'
}, void 0, _jsx('stop', {
  stopColor: 'white',
  offset: '10%'
}), _jsx('stop', {
  stopColor: '#CB4B16',
  offset: '40%'
}), _jsx('stop', {
  stopColor: '#320551',
  offset: '100%'
})));

var _ref2 = _jsx('defs', {}, void 0, _jsx('radialGradient', {
  id: 'g1',
  fx: '50%',
  fy: '50%',
  cx: '50%',
  cy: '50%',
  r: '50%'
}, void 0, _jsx('stop', {
  stopColor: '#210138',
  offset: '10%'
}), _jsx('stop', {
  stopColor: '#320551',
  offset: '100%'
})));

var _ref3 = _jsx('defs', {}, void 0, _jsx('radialGradient', {
  id: 'g2',
  fx: '50%',
  fy: '50%',
  cx: '50%',
  cy: '50%',
  r: '50%'
}, void 0, _jsx('stop', {
  stopColor: 'white',
  offset: '10%'
}), _jsx('stop', {
  stopColor: '#CB4B16',
  offset: '40%'
}), _jsx('stop', {
  stopColor: '#320551',
  offset: '100%'
})));

var _ref4 = _jsx('path', {
  d: 'M 530 500 L 730 500 L 730 600 L 500 700 L 300 600 L 300 400 L 500 300 L 710 390 ',
  fill: 'transparent',
  strokeLinejoin: "round",
  stroke: '#CB4B16',
  strokeWidth: '36'
});

var _ref5 = _jsx('circle', {
  cx: '500',
  cy: '500',
  r: '30',
  fill: 'transparent',
  stroke: '#CB4B16',
  strokeWidth: '16'
});

var _ref6 = _jsx('circle', {
  cx: '730',
  cy: '400',
  r: '30',
  fill: 'transparent',
  stroke: '#CB4B16',
  strokeWidth: '16'
});

var _ref7 = _jsx('br', {});

var _ref8 = _jsx('br', {});

var _ref9 = _jsx(_reactRouterDom.Route, {
  exact: true,
  path: '/setup',
  component: _Welcome2.default
});

var _ref10 = _jsx(_reactRouterDom.Route, {
  path: '/setup/welcome',
  component: _Welcome2.default
});

var _ref11 = _jsx(_reactRouterDom.Route, {
  path: '/setup/metamask',
  component: _MetaMask2.default
});

var _ref12 = _jsx(_reactRouterDom.Route, {
  path: '/setup/verify',
  component: _VerifyAccount2.default
});

var _ref13 = _jsx(_reactRouterDom.Route, {
  path: '/setup/organization',
  component: _VerifyAccount2.default
});

var _ref14 = _jsx(_reactRouterDom.Route, {
  path: '/setup/finish',
  component: _VerifyAccount2.default
});

var MainComponent = function (_Component) {
  _inherits(MainComponent, _Component);

  function MainComponent() {
    _classCallCheck(this, MainComponent);

    return _possibleConstructorReturn(this, (MainComponent.__proto__ || Object.getPrototypeOf(MainComponent)).call(this));
  }

  _createClass(MainComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          dispatch = _props.dispatch,
          account = _props.Actions.account;

      dispatch(account.metamask());

      var path = location.pathname.replace('/account/setup/', '').replace('/account/setup', '');

      var activeStep = path.length ? path : 'welcome';

      dispatch({
        type: 'SET_ACCOUNT_SETUP_DETAILS',
        id: 'activeStep',
        value: activeStep
      });
    }
  }, {
    key: 'nodes',
    value: function nodes() {
      var _props$AccountSetup = this.props.AccountSetup,
          steps = _props$AccountSetup.steps,
          activeStep = _props$AccountSetup.activeStep;


      var x = 500;
      var y = 500;
      var distance = 320;
      var lineLength = 270;

      return Object.keys(steps).map(function (step, i) {
        var title = steps[step].title;


        var active = step == activeStep ? true : false;
        var d = 'M ' + x + ' ' + (25 + y + distance * i) + ' L ' + x + ' ' + (25 + y + distance * i + lineLength);

        return _jsx('svg', {}, void 0, _ref, active ? _jsx('circle', {
          cx: x,
          cy: y + distance * (i + 1),
          r: '65',
          style: { fill: 'url(#g2)' }
        }) : null, _jsx('path', {
          d: d,
          fill: 'transparent',
          strokeLinejoin: "round",
          stroke: '#fff',
          strokeWidth: '36'
        }), _jsx('circle', {
          cx: x,
          cy: y + distance * (i + 1),
          r: '30',
          fill: 'transparent',
          stroke: '#fff',
          strokeWidth: '16'
        }), _jsx('text', {
          x: '600',
          y: y + 320 * (i + 1),
          fill: active ? '#fff' : "#320551",
          fontSize: '65px',
          onClick: function onClick() {
            location.href = '/account/setup/' + step;
          }
        }, void 0, title));
      });
    }
  }, {
    key: 'setupNode',
    value: function setupNode() {

      return _jsx('svg', {
        height: '100%',
        width: "100%",
        viewBox: '0 0 1200 3000'
      }, void 0, _ref2, _jsx('circle', {
        cx: '500',
        cy: '500',
        r: '2200',
        style: { fill: 'url(#g1)' }
      }), _ref3, _jsx('circle', {
        cx: '500',
        cy: '500',
        r: '65',
        style: { fill: 'url(#g2)' }
      }), this.nodes(), _ref4, _ref5, _ref6);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          dispatch = _props2.dispatch,
          _props2$AccountSetup = _props2.AccountSetup,
          steps = _props2$AccountSetup.steps,
          activeStep = _props2$AccountSetup.activeStep;


      return _jsx('div', {}, void 0, _jsx(_reactBootstrap.Row, {}, void 0, _jsx(_reactBootstrap.Col, {
        lg: 12
      }, void 0, _jsx(_reactBootstrap.Jumbotron, {
        style: { height: '800px' }
      }, void 0, _jsx(_reactBootstrap.Col, {
        lg: 4
      }, void 0, _jsx(_reactBootstrap.Panel, {
        style: { textAlign: 'left' }
      }, void 0, this.setupNode())), _jsx(_reactBootstrap.Col, {
        lg: 8
      }, void 0, _jsx(_reactBootstrap.Panel, {}, void 0, _ref7, _ref8, _jsx(_reactRouterDom.Switch, {}, void 0, _ref9, _ref10, _jsx(_reactRouterDom.Route, {
        path: '/setup/terms',
        render: function render() {
          return _jsx(_TermsOfService2.default, {
            agree: function agree() {
              dispatch({ type: 'SET_ACCOUNT_SETUP_DETAILS', id: 'activeStep', value: 'metamask' });
              location.href = '/account/setup/metamask';
            },
            organizationLink: 'https://github.com/git-token',
            tokenDetails: {
              name: 'GitToken',
              symbol: 'GTK',
              address: '0x0'
            }
          });
        }
      }), _ref11, _ref12, _ref13, _ref14)))))));
    }
  }]);

  return MainComponent;
}(_react.Component);

var mapStoreToProps = function mapStoreToProps(store, props) {
  return {
    Actions: store.Actions,
    Account: store.Account,
    AccountSetup: store.AccountSetup
  };
};

var Main = (0, _reactRedux.connect)(mapStoreToProps)(MainComponent);

exports.default = Main;