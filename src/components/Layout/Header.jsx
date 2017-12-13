import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Fade, Panel, Row, Col, Table, Button, ButtonGroup } from 'react-bootstrap'

import FaFolderOpen from 'react-icons/lib/fa/folder-open-o';
import FaGitHub from 'react-icons/lib/fa/github'
import FaRandom from 'react-icons/lib/fa/random';
import FaList from 'react-icons/lib/fa/list';
import FaCodeFork from 'react-icons/lib/fa/code-fork';
import FaHandUp from 'react-icons/lib/fa/hand-o-up'
import FaCode from 'react-icons/lib/fa/code'
import FaCogs from 'react-icons/lib/fa/cogs'
import FaAngleDown from 'react-icons/lib/fa/angle-down'
import FaAngleLeft from 'react-icons/lib/fa/angle-left'

import LeftSideNav from './LeftSideNav.jsx'
import MainLogo from 'gittoken-svg-icons/dist/MainLogo'

class HeaderComponent extends Component {
  constructor() {
    super()

  }

  componentDidMount() {
    const { dispatch } = this.props
  }

  toggleNav({ id, expanded }) {
    const { dispatch } = this.props
    dispatch({ type: 'SET_LAYOUT_DETAILS', id, value: expanded })
  }


  render() {
    const { dispatch, Layout: { expandLeftSideNav, expandRightSideNav, expandHeader } } = this.props

    // const title = () => {
    //   return (
    //       <div>
    //       <FaCubes style={{ color: '#e95420', display: 'inline-block', fontSize: '28px' }}/>
    //       <h6>Services</h6>
    //     </div>
    //   )
    // }

    return (
      <div style={{ position: 'fixed', width: '97%', textAlign: 'center', zIndex: '3' }}>
        <div style={{ textAlign: 'left' }}>
          { !expandHeader ? <Button bsSize={'sm'} bsStyle={'link'} onClick={ this.toggleNav.bind(this, {id: 'expandHeader', expanded: true })}>
              <MainLogo width={'72px'}/>
              <h6 style={{ marginTop: '-10px', marginBottom: '-16px', color: '#e95420' }}>GitToken</h6>
            </Button> : null
          }
        </div>
        <Fade in={expandHeader}>
        <Panel style={{
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            borderStyle: 'solid',
            borderColor: '#e95420'
          }}
        >
        <div style={{ textAlign: 'left' }}>
          <Button bsSize={'lg'} bsStyle={'link'} onClick={ this.toggleNav.bind(this, {id: 'expandHeader', expanded: false }) }><FaAngleLeft /></Button>
        </div>
        <div style={{ textAlign: 'center' }}>
          <ButtonGroup>
            <Button bsSize={'sm'} bsStyle={'link'} onClick={() => { location.href = '/registry' }}>
              <FaList style={{ color: '#e95420', display: 'inline-block', fontSize: '28px' }}/>
              <h6>Registry</h6>
            </Button>
            <Button bsSize={'sm'} bsStyle={'link'} >
              <FaCogs style={{ color: '#e95420', display: 'inline-block', fontSize: '28px' }}/>
              <h6>Analysis</h6>
            </Button>
            <Button bsSize={'sm'} bsStyle={'link'} >
              <FaHandUp style={{ color: '#e95420', display: 'inline-block', fontSize: '28px' }}/>
            <h6>Auction</h6>
            </Button>
            <Button bsSize={'sm'} bsStyle={'link'} >
              <FaRandom style={{ color: '#e95420', display: 'inline-block', fontSize: '28px' }}/>
              <h6>Exchange</h6>
            </Button>
            <Button bsSize={'sm'} bsStyle={'link'} >
              <FaCodeFork style={{ color: '#e95420', display: 'inline-block', fontSize: '28px' }}/>
              {/* <MainLogo width={'72px'} style={{ marginLeft: '-5px', marginBottom: '-15px'}} /> */}
              <h6>Torvalds Network</h6>
            </Button>
            <Button bsSize={'sm'} bsStyle={'link'} >
              <FaCode style={{ color: '#e95420', display: 'inline-block', fontSize: '28px' }}/>
              {/* <MainLogo width={'72px'} style={{ marginLeft: '-5px', marginBottom: '-15px'}} /> */}
              <h6>Developers</h6>
            </Button>
            <Button
              bsSize={'sm'}
              bsStyle={'link'} >
              <FaFolderOpen style={{ color: '#e95420', display: 'inline-block', width: '100%', height: '28px' }}/>
            <h6>My Tokens</h6>
            </Button>
            <Button
              bsSize={'sm'}
              bsStyle={'link'} >
              <FaGitHub style={{ color: '#e95420', display: 'inline-block', width: '100%', height: '28px' }}/>
              <h6>Verify Acount</h6>
            </Button>
          </ButtonGroup>
        </div>
      </Panel>
      </Fade>
      </div>
    )
  }
}


const mapStoreToProps = (store, props) => {
  return {
    Layout: store.Layout
  }
}

const Header = connect(mapStoreToProps)(HeaderComponent)

export default Header
