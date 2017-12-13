import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Panel, Button, ButtonGroup } from 'react-bootstrap'
import MainLogo from 'gittoken-svg-icons/dist/MainLogo'

import FaFolderOpen from 'react-icons/lib/fa/folder-open-o';
import FaGitHub from 'react-icons/lib/fa/github'
import FaRandom from 'react-icons/lib/fa/random';
import FaList from 'react-icons/lib/fa/list';
import FaCodeFork from 'react-icons/lib/fa/code-fork';
import FaHandUp from 'react-icons/lib/fa/hand-o-up'
import FaCode from 'react-icons/lib/fa/code'
import FaCogs from 'react-icons/lib/fa/cogs'

class LeftSideNavComponent extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    const { dispatch } = this.props
  }

  render() {
    const { dispatch, Layout: { expandLeftSideNav } } = this.props

    return (
      <div>
        <Panel style={{
            backgroundColor: 'rgba(0, 0, 0, 0.33)',
            margin: '5px',
            borderStyle: 'solid',
            borderColor: '#e95420',
            height: '715px'
          }}
          collapsible expanded={true}
          // onMouseEnter={() => { dispatch({ type: 'SET_LAYOUT_DETAILS', id: 'expandLeftSideNav', value: true }) }}
          // onMouseLeave={() => { dispatch({ type: 'SET_LAYOUT_DETAILS', id: 'expandLeftSideNav', value: false }) }}
        >
          <Button bsSize={'sm'} bsStyle={'info'} block>
            <FaList style={{ color: '#e95420', display: 'inline-block', fontSize: '28px' }}/>
            <h6>Registry</h6>
          </Button>
          <Button bsSize={'sm'} bsStyle={'info'} block>
            <FaCogs style={{ color: '#e95420', display: 'inline-block', fontSize: '28px' }}/>
            <h6>Analysis</h6>
          </Button>
          <Button bsSize={'sm'} bsStyle={'info'} block>
            <FaHandUp style={{ color: '#e95420', display: 'inline-block', fontSize: '28px' }}/>
          <h6>Auction</h6>
          </Button>
          <Button bsSize={'sm'} bsStyle={'info'} block>
            <FaRandom style={{ color: '#e95420', display: 'inline-block', fontSize: '28px' }}/>
            <h6>Exchange</h6>
          </Button>
          <Button bsSize={'sm'} bsStyle={'info'} block>
            <FaCodeFork style={{ color: '#e95420', display: 'inline-block', fontSize: '28px' }}/>
            {/* <MainLogo width={'72px'} style={{ marginLeft: '-5px', marginBottom: '-15px'}} /> */}
            <h6>Torvalds</h6>
            <h6>Network</h6>
          </Button>
          <Button bsSize={'sm'} bsStyle={'info'} block>
            <FaCode style={{ color: '#e95420', display: 'inline-block', fontSize: '28px' }}/>
            {/* <MainLogo width={'72px'} style={{ marginLeft: '-5px', marginBottom: '-15px'}} /> */}
            <h6>Developers</h6>
          </Button>
          <Button bsStyle={'info'} block>
            <FaFolderOpen style={{ color: '#e95420', display: 'inline-block', width: '100%', height: '28px' }}/>
          <h6>My Tokens</h6>
          </Button>
          <Button bsStyle={'info'} block>
            <FaGitHub style={{ color: '#e95420', display: 'inline-block', width: '100%', height: '28px' }}/>
            <h6>Verify</h6>
            <h6>Acount</h6>
          </Button>
        </Panel>
      </div>
    )
  }
}


const mapStoreToProps = (store, props) => {
  return {
    Layout: store.Layout
  }
}

const LeftSideNav = connect(mapStoreToProps)(LeftSideNavComponent)

export default LeftSideNav
