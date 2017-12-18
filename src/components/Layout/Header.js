import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap'

import NavBarLogo from 'gittoken-svg-icons/dist/NavBarLogo'

import ProfileIcon from '../Account/ProfileIcon'
import Menu from './Menu'

class HeaderComponent extends Component {
  constructor() {
    super()
  }


  componentDidMount() {

  }

  render() {
    const { Account: { profile: { username, _json: { avatar_url } } } } = this.props

    return (
      <div>
        <Row>
          <Col lg={12}>
            <div style={{ marginTop: '20px' }}>
              { username ? <ProfileIcon
                url={avatar_url}
                onClick={() => { location.href = "/account" }}
                width={'30%'}
                height={'30%'}
              /> : <Menu /> }
              <NavBarLogo width={'20%'} />
            </div>
          </Col>
        </Row>
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
