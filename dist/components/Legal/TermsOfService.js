'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx('h3', {}, void 0, 'Thank You for using GitToken software!');

var _ref2 = _jsx('br', {});

var _ref3 = _jsx('a', {
  href: 'https://github.com/git-token',
  target: '_blank'
}, void 0, 'https://github.com/git-token');

var _ref4 = _jsx('p', {}, void 0, 'In addition to these Terms of Service ("ToS"), there may be other GitToken Services with specific ToS. Those ToS extend to this ToS agreement, and this ToS agreement extends to those specific ToS between GitToken and you when you use those Services.');

var _ref5 = _jsx('p', {}, void 0, 'By using GitToken Services you are agreeing to these terms.');

var _ref6 = _jsx('p', {}, void 0, 'Please read the following ToS carefully before using any GitToken service. ');

var _ref7 = _jsx('p', {}, void 0, 'Versions of this ToS can be found ', _jsx('a', {
  href: 'https://github.com/git-token/documentation/blob/master/tos/terms_of_services.md',
  target: '_blank'
}, void 0, 'here'), '.');

var _ref8 = _jsx('br', {});

var _ref9 = _jsx('h3', {}, void 0, 'Use of GitToken Services');

var _ref10 = _jsx('br', {});

var _ref11 = _jsx('p', {}, void 0, 'GitToken provides software for automating Ethereum token issuances, distributions, and offerings that correspond to GitHub contribution events, such as a pull request or milestone being reached.');

var _ref12 = _jsx('p', {}, void 0, 'GitToken token offerings may only take place on GitToken provided user interfaces. The purpose of GitToken is to better incentivize and reward contributors, automatically manage Ethereum token distributions, and provide new access to funding for software development.');

var _ref13 = _jsx('br', {});

var _ref14 = _jsx('h3', {}, void 0, 'GitHub Account Information');

var _ref15 = _jsx('br', {});

var _ref16 = _jsx('p', {}, void 0, 'GitToken is not affiliated with GitHub.');

var _ref17 = _jsx('p', {}, void 0, 'By using GitToken software, your GitHub contributions, username, and email are made public in the Ethereum blockchain. You agree to not impersonate or misrepresent your GitHub identity.');

var _ref18 = _jsx('p', {}, void 0, 'If your organization uses private repositories, this may violate your organization\'s policies as a result of some information being made public.');

var _ref19 = _jsx('p', {}, void 0, 'Consult with your organization before using GitToken.');

var _ref20 = _jsx('br', {});

var _ref21 = _jsx('h3', {}, void 0, 'Organizations Using GitToken');

var _ref22 = _jsx('br', {});

var _ref23 = _jsx('p', {}, void 0, 'All organizations using GitToken Services retain intellectual property rights over their software.');

var _ref24 = _jsx('p', {}, void 0, 'GitToken provides software that enables organizations to issue nominal amounts of Ethereum tokens in exchange for contributions in organizations\' GitHub repositories.');

var _ref25 = _jsx('p', {}, void 0, 'Organizations may set custom values for token distributions corresponding to GitHub events, or alternatively can use the default values.');

var _ref26 = _jsx('p', {}, void 0, 'In cases where the organization may wish to watch only certain repostories or events, they may select those options using the GitHub organization settings webpage on the GitHub official website.');

var _ref27 = _jsx('p', {}, void 0, 'If you are using GitToken Services as an agent on behalf of an organization, the organization in which you represent thereby accepts these terms.');

var _ref28 = _jsx('p', {}, void 0, 'It will hold harmless and indemnify GitToken and its contributors from any claim, suit or action arising from or related to the use of the Services or violation of these ToS, including any liability or expense arising from claims, losses, damages, suits, judgments, litigation costs and attorneys\u2019 fees.');

var _ref29 = _jsx('br', {});

var _ref30 = _jsx('h3', {}, void 0, 'Modifying and Cancellation of Services');

var _ref31 = _jsx('br', {});

var _ref32 = _jsx('p', {}, void 0, 'GitToken retains the right to modify and cancel our services. GitToken service changes can be found in the change log for the service release. Any features can be requested by opening an issue on GitToken\'s GitHub repository pages.');

var _ref33 = _jsx('p', {}, void 0, 'GitToken will make public announcements and provide an adequate period of time for you to retrieve any personal data that may be lost or compromised in the event of a service cancellation.');

var _ref34 = _jsx('br', {});

var _ref35 = _jsx('h3', {}, void 0, 'Regulatory Compliance');

var _ref36 = _jsx('br', {});

var _ref37 = _jsx('p', {}, void 0, 'GitToken asserts tokens issued using GitToken Services are not financial securities.');

var _ref38 = _jsx('p', {}, void 0, 'GitTokens are reward points issued to GitHub users when contributions are made toward an organizations\' GitHub repositories.');

var _ref39 = _jsx('p', {}, void 0, 'Any benefit flowing to the contributor or organization is done so in the direct renumeration of tokens given to the contributor in exchange for work rendered.');

var _ref40 = _jsx('p', {}, void 0, 'Tokens issued reflect intellectual property contributed to an organization, but do not reflect intellectual property rights, royalties, or guarantees of any future profit or benefit.');

var _ref41 = _jsx('p', {}, void 0, 'GitToken does not restrict issued tokens from being interchanged using third party contracts and services. GitToken does not restrict the organization using the software from ascribing additional properties to the token.');

var _ref42 = _jsx('p', {}, void 0, 'Any additional ascribed value, monetary or otherwise, is derived from the utility of the token and the features integrated with the token.');

var _ref43 = _jsx('p', {}, void 0, 'Any additional features added or integrated into the organization\'s software that may alter the characteristics of the token are completed at the sole discretion and liability of the organization using the Services.');

var _ref44 = _jsx('p', {}, void 0, 'GitToken, and its contributors, will not be held accountable for any claim, damage, implied warranties, or fine for any token resembling a financial security for any reason.');

var _ref45 = _jsx('p', {}, void 0, 'In the event that GitToken receives notice pertaining to the determination of GitToken issued tokens resembling financial securities from financial regulation authorities (e.g. Securities & Exchange Commission), GitToken contributors will determine next steps, including ceasing access to parties in affected jurisdictions and applying for exemption where its reasonable to continue operations.');

var _ref46 = _jsx('p', {}, void 0, 'GitToken is obligated to comply and aid in the enforcement of all applicable laws. In the event that law enforcement requests help in investigating illegal activity, GitToken will support such investigations.');

var _ref47 = _jsx('br', {});

var _ref48 = _jsx('h3', {}, void 0, 'Copyright, Services Liabilities & Limitations');

var _ref49 = _jsx('br', {});

var _ref50 = _jsx('p', {}, void 0, 'In most cases, GitToken software is provided under the MIT license:');

var _ref51 = _jsx('hr', {});

var _ref52 = _jsx('p', {}, void 0, 'Copyright 2017 GitToken');

var _ref53 = _jsx('p', {}, void 0, 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:');

var _ref54 = _jsx('p', {}, void 0, 'The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.');

var _ref55 = _jsx('p', {}, void 0, 'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.');

var _ref56 = _jsx('hr', {});

var _ref57 = _jsx('p', {}, void 0, 'Extended Limited Liability');

var _ref58 = _jsx('p', {}, void 0, 'WHEN PERMITTED BY LAW, GITTOKEN, AND GITTOKEN CONTRIBUTORS, WILL NOT BE RESPONSIBLE FOR LOST PROFITS, REVENUES, OR DATA, FINANCIAL LOSSES OR INDIRECT, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES.');

var _ref59 = _jsx('p', {}, void 0, 'TO THE EXTENT PERMITTED BY LAW, GITTOKEN, AND ITS CONTRIBUTORS, WILL NOT BE RESPONSIBLE FOR ANY CLAIM, DAMAGE, IMPLIED WARRANTIES, OR FINE FOR ANY TOKEN RESEMEBLING A FINANCIAL SECURITY FOR ANY REASON.');

var _ref60 = _jsx('p', {}, void 0, 'TO THE EXTENT PERMITTED BY LAW, THE TOTAL LIABILITY OF GITTOKEN, AND ITS CONTRIBUTORS, FOR ANY CLAIMS UNDER THESE TERMS, INCLUDING FOR ANY IMPLIED WARRANTIES, IS LIMITED TO THE AMOUNT YOU PAID US TO USE THE SERVICES (OR, IF WE CHOOSE, TO SUPPLYING YOU THE SERVICES AGAIN).');

var _ref61 = _jsx('p', {}, void 0, 'IN ALL CASES, GITTOKEN, AND ITS CONTRIBUTORS, WILL NOT BE LIABLE FOR ANY LOSS OR DAMAGE.');

var _ref62 = _jsx('br', {});

var _ref63 = _jsx('h3', {}, void 0, 'Acceptance of Terms of Services');

var _ref64 = _jsx('p', {}, void 0, 'By accepting these ToS and using these Services, you agree to:');

var _ref65 = _jsx('ul', {}, void 0, _jsx('li', {}, void 0, 'be at least 18 years old (or at least 13 years old with parent consent) and to have full capacity to enter contract under applicable law;'), _jsx('li', {}, void 0, 'only use GitToken Services using accounts associated with your GitHub account and not impersonate or misrepresent your identity;'), _jsx('li', {}, void 0, 'only use GitToken Services with tokens or Ethereum (ETH) legally obtained and owned or authorized to be managed by you;'), _jsx('li', {}, void 0, 'not undertaking or abetting any unlawful activity through use of GitToken Services and comply with all applicable laws;'), _jsx('li', {}, void 0, 'assume liability of all financial risk of using GitToken Services, including complete loss of ETH, tokens, or any digital asset used in GitToken Services;'), _jsx('li', {}, void 0, 'our right to terminate these Services to you for any reason;'));

var _ref66 = _jsx('hr', {});

var TermsOfServiceComponent = function (_Component) {
  _inherits(TermsOfServiceComponent, _Component);

  function TermsOfServiceComponent() {
    _classCallCheck(this, TermsOfServiceComponent);

    return _possibleConstructorReturn(this, (TermsOfServiceComponent.__proto__ || Object.getPrototypeOf(TermsOfServiceComponent)).call(this));
  }

  _createClass(TermsOfServiceComponent, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          agree = _props.agree,
          tokenDetails = _props.tokenDetails,
          organizationLink = _props.organizationLink;


      return _jsx(_reactBootstrap.Row, {}, void 0, _jsx(_reactBootstrap.Col, {
        sm: 12
      }, void 0, _jsx('div', {
        style: { height: 600, overflow: 'scroll' }
      }, void 0, _ref, _ref2, _jsx('p', {}, void 0, _jsx('a', {
        href: organizationLink,
        target: '_blank'
      }, void 0, tokenDetails['name']), ' ("', tokenDetails['symbol'], '") uses GitToken products and services ("Services"). These Services are provided as open-source software by contributors at the GitHub organization Uniform Resource Locator ("URL") ', _ref3, '.'), _ref4, _jsx('p', {}, void 0, 'GitToken provides these Services in hopes that they will enable organizations, like ', _jsx('a', {
        href: organizationLink,
        target: '_blank'
      }, void 0, tokenDetails['symbol']), ', to better incentivize and reward contributors, automatically manage Ethereum token distributions, and provide new access to funding for software development.'), _ref5, _ref6, _ref7, _ref8, _ref9, _ref10, _ref11, _ref12, _ref13, _ref14, _ref15, _ref16, _jsx('p', {}, void 0, 'GitToken Services requests access to your public GitHub information using Open Authorization ("OAuth"). This information is used by the GitToken software to verify your identity with the following contract, ', _jsx('a', {
        href: 'https://etherscan.io/address/' + tokenDetails['address'],
        target: '_blank'
      }, void 0, tokenDetails['address']), ', ("Contract") and map token distributions to your Ethereum public address based on your GitHub username.'), _ref17, _ref18, _ref19, _ref20, _ref21, _ref22, _ref23, _ref24, _ref25, _ref26, _ref27, _ref28, _ref29, _ref30, _ref31, _ref32, _ref33, _ref34, _ref35, _ref36, _ref37, _ref38, _ref39, _ref40, _ref41, _ref42, _ref43, _ref44, _ref45, _ref46, _ref47, _ref48, _ref49, _ref50, _ref51, _ref52, _ref53, _ref54, _ref55, _ref56, _ref57, _ref58, _ref59, _ref60, _ref61, _ref62, _ref63, _ref64, _ref65, _ref66, _jsx(_reactBootstrap.Button, {
        bsSize: 'sm',
        bsStyle: 'primary',
        onClick: agree,
        block: true
      }, void 0, 'I HAVE CAREFULLY READ, UNDERSTAND AND AGREE TO THESE TERMS OF SERVICES'))));

      // return (
      //   <Modal show={tos} bsSize={'lg'}>
      //     <Modal.Header>
      //       <div style={{ textAlign: 'center' }}>
      //         <a href="https://GitToken.org" target="_blank">
      //         <svg height="144" viewBox="0 0 400 400">
      //           <path d="M 250 200 L 350 150 L 350 250 L 250 300 L 150 250 L 150 150 Q 250 100 250 100 L 250 100 L 315 135 "
      //             fill="transparent"
      //             strokeLinejoin={"round"}
      //             stroke="#ff6a00"
      //             strokeWidth="12"
      //           />
      //
      //
      //           <circle cx="315" cy="135" r="14" fill="#ff6a00"/>
      //         <circle cx="315" cy="135" r="8" fill="white"/>
      //           <circle cx="250" cy="200" r="14" fill="#ff6a00"/>
      //         <circle cx="250" cy="200" r="8" fill="white"/>
      //         </svg>
      //         </a>
      //       </div>
      //       <h1>GitToken Terms of Service</h1>
      //       <p>Effective Date: {new Date().toLocaleString()}</p>
      //     </Modal.Header>
      //     <Modal.Body>
      //
      //     </Modal.Body>
      //     <Modal.Footer>
      //       <p><small>Please carefully read and scroll down to accept the Terms of Service before continuing using the website. </small></p>
      //     </Modal.Footer>
      //   </Modal>
      // )
    }
  }]);

  return TermsOfServiceComponent;
}(_react.Component);

var mapStoreToProps = function mapStoreToProps(store, props) {
  return {
    AccountSetup: store.AccountSetup
  };
};

var TermsOfService = (0, _reactRedux.connect)(mapStoreToProps)(TermsOfServiceComponent);

exports.default = TermsOfService;