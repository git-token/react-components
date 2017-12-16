import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  Nav,
  NavItem,
  Row,
  Col
} from 'react-bootstrap'

class MenuComponent extends Component {
  constructor() {
    super()
  }

  select(item) {
    const { dispatch, Account: { menu } } = this.props
    location.href = `/${item}`
  }

  menuItems({ menu }) {
    return menu.map((item, i) => {
      const { key, title, link } = item
      return (
        <NavItem
          eventKey={key}
          href={link}
          key={key}>
          {title}
        </NavItem>
      )
    })
  }

  render() {
    const { Account: { menu } } = this.props

    return (
      <div >
        <Row>
          <Col lg={12}>
            <Nav
              style={{ marginTop: '-75px' }}
              bsStyle="pills"
              activeKey={location.pathname.replace("/", "")}
              onSelect={ this.select.bind(this) }>
              { this.menuItems({ menu }) }
            </Nav>
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

const Menu = connect(mapStoreToProps)(MenuComponent)

export default Menu
