import React, { Component } from 'react'
import { connect } from 'react-redux'

import { accountActions } from '../../actions/index'



class AccountMenuComponent extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    const { dispatch } = this.props

    dispatch(accountActions.getProfile())
  }

  render() {
    return (
      <h1>Account Menu</h1>
    );
  }
}


const mapStateToProps = (store, props) => {
  return {
    account: store.account
  }
}


const AccountMenu = connect(mapStateToProps)(AccountMenuComponent)

export default AccountMenu
