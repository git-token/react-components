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
    const { Account: { profile: { username } } } = this.props

    return (
      <div>
        <Row>
          <Col lg={12}>
            <div style={{ marginTop: '20px' }}>
              <ProfileIcon
                url={"https://avatars2.githubusercontent.com/u/2837196?v=4"}
                onClick={() => { location.href = "/account" }}
                width={'30%'}
                height={'30%'}
              />
              <NavBarLogo width={'20%'} />
            </div>
            {/* {username ? <ProfileIcon /> : <Menu />} */}
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
