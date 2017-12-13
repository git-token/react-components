import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap'

import NavBarLogo from 'gittoken-svg-icons/dist/NavBarLogo'

import ProfileIcon from './ProfileIcon'
import Menu from './Menu'

class HeaderComponent extends Component {
  constructor() {
    super()
  }


  componentDidMount() {

  }

  render() {
    const { Account: { profile: { username } } } = this.props

    console.log('username', username)

    return (
      <div>
        <Grid>
          <Row>
            <Col lg={6}>
              <div style={{ marginTop: '10px' }}>
                <NavBarLogo width={'40%'} />
              </div>
            </Col>
            <Col lg={6}>
              {username ? <ProfileIcon /> : <Menu />}
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}


const mapStoreToProps = (store, props) => {
  return {
    Actions: store.Actions,
    Account: store.Account
  }
}

const Header = connect(mapStoreToProps)(HeaderComponent)

export default Header
