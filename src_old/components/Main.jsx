
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Draggable from 'react-draggable';
import { Grid, Row, Col, Panel, Navbar, ButtonGroup, Button } from 'react-bootstrap'
import RegistryLogo from 'gittoken-svg-icons/dist/RegistryLogo'
import MainLogo from 'gittoken-svg-icons/dist/MainLogo'
import { AccountMenu } from './Account/index'
import { Route } from 'react-router-dom'



import { Header, LeftSideNav, RightSideNav, Footer } from './Layout/index'
import { Listings } from './Registry/index'
import { DataPanel } from './Data/index'

class MainComponent extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div >
        <AccountMenu />
      </div>
    )
  }
}


const mapStoreToProps = (store, props) => {
  return {
    Layout: store.Layout
  }
}

const Main = connect(mapStoreToProps)(MainComponent)

export default Main
