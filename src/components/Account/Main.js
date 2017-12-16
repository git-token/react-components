import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'

import Header from '../Layout/Header'
import Menu from './Menu'
import Register from './Register'

class MainComponent extends Component {
  constructor() {
    super()
  }


  render() {

    return (
      <div>
        <Grid>
          <Header />
          <Menu />
        </Grid>
      </div>
    )
  }
}


const mapStoreToProps = (store, props) => {
  return {
    Actions: store.Actions
  }
}

const Main = connect(mapStoreToProps)(MainComponent)

export default Main
