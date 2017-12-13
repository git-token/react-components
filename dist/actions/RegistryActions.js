'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _githubApi = require('github-api');

var _githubApi2 = _interopRequireDefault(_githubApi);

var _ethereumjsTx = require('ethereumjs-tx');

var _ethereumjsTx2 = _interopRequireDefault(_ethereumjsTx);

var _GitTokenRegistry = require('gittoken-contracts/build/contracts/GitTokenRegistry.json');

var _GitTokenRegistry2 = _interopRequireDefault(_GitTokenRegistry);

var _RegistryWorker = require('gittoken-web-workers/dist/Registry.worker.js');

var _RegistryWorker2 = _interopRequireDefault(_RegistryWorker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var abi = _GitTokenRegistry2.default.abi,
    unlinked_binary = _GitTokenRegistry2.default.unlinked_binary;

var RegistryActions = function () {
  function RegistryActions(_ref) {
    var torvaldsNetwork = _ref.torvaldsNetwork,
        registryAddress = _ref.registryAddress;

    _classCallCheck(this, RegistryActions);

    // Torvalds Network
    this.torvalds = new _web2.default(new _web2.default.providers.HttpProvider(torvaldsNetwork));

    // Registry on the Main Ethereum Network
    this.registry = window.web3.eth.contract(abi).at(registryAddress);

    this.worker = new _RegistryWorker2.default();
    this.worker.addEventListener('message', function (msg) {
      console.log('Received Message from Worker', msg);
    });
  }

  /**
   * [registerToken description]
   * @param  {[type]} registry      [description]
   * @param  {[type]} organization  [description]
   * @param  {[type]} tokenName     [description]
   * @param  {[type]} adminAddress  [description]
   * @param  {[type]} adminUsername [description]
   * @param  {[type]} symbol        [description]
   * @param  {[type]} decimals      [description]
   * @return {[type]}               [description]
   */


  _createClass(RegistryActions, [{
    key: 'registerToken',
    value: function registerToken(_ref2) {
      var _this = this;

      var authToken = _ref2.authToken,
          organization = _ref2.organization,
          tokenName = _ref2.tokenName,
          adminAddress = _ref2.adminAddress,
          adminUsername = _ref2.adminUsername,
          symbol = _ref2.symbol,
          decimals = _ref2.decimals;

      return function (dispatch) {
        _this.validateAdmin({ username: adminUsername, token: authToken, organization: organization }).then(function (validated) {
          if (!validated) {
            alert('Only an organization admin may register an organization with GitToken');
            throw new Error('Invalid Authorization');
          } else {
            var params = [organization, name, symbol, decimals, adminAddress, adminUsername];
            return _this.sendTransaction({ params: params, method: 'registerToken' });
          }
        }).then(function (txHash) {
          console.log('txHash', txHash);
          // dispatch({ type: null, id: null, value: null })
          return window.web3.eth.getTransactionReceipt(txHash);
        }).then(function (txReceipt) {
          console.log('txReceipt', txReceipt);
        }).catch(function (error) {
          console.log('error', error);
        });
      };
    }
  }, {
    key: 'signTransaction',
    value: function signTransaction(_ref3) {
      var _this2 = this;

      var params = _ref3.params,
          method = _ref3.method;

      return new _bluebird2.default(function (resolve, reject) {
        getAccount().then(function (account) {
          var _registry$method;

          var data = (_registry$method = _this2.registry[method]).getData.apply(_registry$method, _toConsumableArray(params).concat([{ data: unlinked_binary }]));

          var tx = new _ethereumjsTx2.default({
            from: account,
            to: _this2.registry.address,
            data: data,
            value: 0,
            gasLimit: 1e6, // set higher?
            gas: 4e9
          });

          console.log('tx', tx);
        }).catch(function (error) {
          reject(error);
        });
      });
    }
  }, {
    key: 'sendTransaction',
    value: function sendTransaction(_ref4) {
      var _this3 = this;

      var params = _ref4.params,
          method = _ref4.method;

      return new _bluebird2.default(function (resolve, reject) {
        var _registry;

        (_registry = _this3.registry)[method].apply(_registry, _toConsumableArray(params).concat([function (error, txHash) {
          if (error) {
            reject(error);
          }
          if (txHash != 'undefined') {
            resolve(txHash);
          }
        }]));
      });
    }
  }, {
    key: 'setAccount',
    value: function setAccount() {
      return function (dispatch) {
        getAccount().then(function (account) {
          dispatch({
            type: 'SET_ACCOUNT_DETAILS',
            id: 'account',
            value: account
          });
        }).catch(function (error) {
          console.log('setAccount::error', error);
        });
      };
    }
  }, {
    key: 'getAccount',
    value: function getAccount() {
      return new _bluebird2.default(function (resolve, reject) {
        window.web3.eth.getAccounts(function (error, accounts) {
          if (error) {
            reject(error);
          }
          console.log('accounts', accounts);
          resolve(accounts[0]);
        });
      });
    }
  }, {
    key: 'validateAdmin',
    value: function validateAdmin(_ref5) {
      var username = _ref5.username,
          token = _ref5.token,
          organization = _ref5.organization;

      return new _bluebird2.default(function (resolve, reject) {
        // console.log('username, token, organization', username, token, organization)
        var github = new _githubApi2.default({ username: username, token: token });
        var user = github.getUser();
        var org = github.getOrganization(organization);
        var profile = void 0;
        _bluebird2.default.resolve(user.getProfile()).then(function (_ref6) {
          var data = _ref6.data;

          profile = data;
          return org.listMembers({ role: 'admin' });
        }).then(function (_ref7) {
          var data = _ref7.data;

          return data;
        }).map(function (member) {
          if (member.login == profile.login) {
            resolve(true);
          } else {
            return null;
          }
        }).then(function () {
          resolve(false);
        }).catch(function (error) {
          reject(error);
        });
      });
    }

    // watchRegitrations({ fromBlock=0, toBlock='latest' }) {
    //   return (dispatch) => {
    //
    //     console.log(`Watching Registration Events for: ${this.registry.address}`)
    //
    //     const event = this.registry.Registration({ fromBlock, toBlock }, (error, result) => {
    //       if (error) { console.log('error', error) }
    //       console.log('result', result)
    //     })
    //   }
    // }

  }, {
    key: 'getRegitrations',
    value: function getRegitrations() {
      var _this4 = this;

      return function (dispatch) {

        console.log('Retrieving Registration Events for: ' + _this4.registry.address);

        _this4.registry.allEvents({ fromBlock: 0, toBlock: 'latest' }, function (error, log) {
          if (error) {
            console.log('getRegitrations::error', error);
          }
          // console.log(log)
          var args = log.args;
          var _token = args._token;


          dispatch({
            type: 'SET_REGISTRY_ORGANIZATION_DETAILS',
            id: _token,
            value: args
          });
        });
      };
    }
  }]);

  return RegistryActions;
}();

exports.default = RegistryActions;