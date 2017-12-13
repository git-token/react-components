'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.history = exports.store = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _createBrowserHistory = require('history/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _redux = require('redux');

var _reactRouterRedux = require('react-router-redux');

var _index = require('gittoken-reducers/dist/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Create a history of your choosing (we're using a browser history in this case)
var history = (0, _createBrowserHistory2.default)();

// Build the middleware for intercepting and dispatching navigation actions
var middleware = (0, _reactRouterRedux.routerMiddleware)(history);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
var store = (0, _redux.createStore)((0, _redux.combineReducers)(_extends({}, _index2.default, {
  router: _reactRouterRedux.routerReducer
})), (0, _redux.applyMiddleware)(middleware), (0, _redux.applyMiddleware)(_reduxThunk2.default));

exports.store = store;
exports.history = history;