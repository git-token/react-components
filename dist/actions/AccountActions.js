'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _githubApi = require('github-api');

var _githubApi2 = _interopRequireDefault(_githubApi);

var _AccountWorker = require('gittoken-web-workers/dist/Account.worker.js');

var _AccountWorker2 = _interopRequireDefault(_AccountWorker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GitTokenAccountWorker = function () {
  function GitTokenAccountWorker(_ref) {
    var url = _ref.url;

    _classCallCheck(this, GitTokenAccountWorker);

    this.profileApiUrl = url;

    this.worker = new RegistryWorker();

    this.worker.addEventListener('message', function (msg) {
      console.log('Received Message from Account Worker', msg);
    });
  }

  _createClass(GitTokenAccountWorker, [{
    key: 'getProfile',
    value: function getProfile() {
      var _this = this;

      return function (dispatch) {
        console.log('Get Profile!');
        _this.worker.postMessage({
          event: 'GET_PROFILE',
          payload: _this.profileApiUrl
        });
      };
    }
  }]);

  return GitTokenAccountWorker;
}();

exports.default = GitTokenAccountWorker;