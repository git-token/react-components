import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Panel, Button, ButtonGroup } from 'react-bootstrap'
import MainLogo from 'gittoken-svg-icons/dist/MainLogo'
import FaFolderOpen from 'react-icons/lib/fa/folder-open-o';
import FaGitHub from 'react-icons/lib/fa/github'

class RightSideNavComponent extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    const { dispatch } = this.props
  }

  render() {
    const { dispatch, Layout: { expandRightSideNav } } = this.props

    return (
      <div >
        <Panel style={{
            backgroundColor: 'rgba(0, 0, 0, 0.33)',
            borderStyle: 'solid',
            borderColor: '#e95420',
            height: '800px'
          }}
          // onMouseEnter={() => { dispatch({ type: 'SET_LAYOUT_DETAILS', id: 'expandRightSideNav', value: true }) }}
          // onMouseLeave={() => { dispatch({ type: 'SET_LAYOUT_DETAILS', id: 'expandRightSideNav', value: false }) }}
        >
          <Button bsStyle={'info'} block>
            <FaFolderOpen style={{ color: '#e95420', display: 'inline-block', width: '100%', height: '28px' }}/>
            <h6>Tokens</h6>
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

const RightSideNav = connect(mapStoreToProps)(RightSideNavComponent)

export default RightSideNav
