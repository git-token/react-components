import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  Grid,
  Panel
} from 'react-bootstrap'

import Header from '../Layout/Header'
import Menu from './Menu'

class RegisterComponent extends Component {
  constructor() {
    super()
  }



  render() {


    return (
      <div>
        <Grid>
          <p>Hello</p>
        </Grid>
      </div>
    )
  }
}


const mapStoreToProps = (store, props) => {
  return {
    Actions: store.Actions,
    menu: [{
      key: 'register',
      title: 'Register Organization',
      link: '/account/register'
    }, {
      key: 'contributions',
      title: 'Contribution Activity',
      link: '/account/contributions'
    }]
  }
}

const Register = connect(mapStoreToProps)(RegisterComponent)

export default Register
