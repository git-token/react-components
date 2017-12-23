import Promise, { promisifyAll } from 'bluebird'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import ModelViewer from 'metamask-logo'
import {
  Row,
  Col,
  Button,
  Panel
} from 'react-bootstrap'
import ProfileIcon from '../ProfileIcon'


class VerifyAccountComponent extends Component {
  constructor() {
    super()
  }

  verify() {
    const {
      dispatch,
      Actions: { account },
      Account: {
        address,
        // profile: { username }
      }
    } = this.props

    const username = 'Ryanmtate'
    dispatch(account.verifyAccount({ username, address }))

  }




  render() {
    const { Account: { address, profile } } = this.props

    // const { username, _json: { avatar_url } } = profile
    const avatar_url = "https://avatars2.githubusercontent.com/u/2837196?v=4"
    const username = "Ryanmtate"

    return (
      <div>
        <Row>
          <Col sm={12}>
            <center>
              <h1>Verify Account Details</h1>
            </center>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col sm={4}>
            <center>
              <img width={'100%'} src={avatar_url} />
            </center>
          </Col>
          <Col sm={8}>
            <strong>Ethereum Address</strong>
            <p><small>{address}</small></p>
            <strong>GitHub Username:</strong>
            <p><small>{username}</small></p>
            <strong>Agree to GitToken Terms of Service:</strong>
            <p><small>{ true ? 'true' : 'false' }</small></p>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col sm={12}>
            <Button
              bsSize={'lg'}
              bsStyle={'primary'}
              onClick={this.verify.bind(this)}
              block>
              Sign Account Details
            </Button>
          </Col>
        </Row>
      </div>
    )

  }
}


const mapStoreToProps = (store, props) => {
  return {
    Account: store.Account,
    Actions: store.Actions
  }
}

const VerifyAccount = connect(mapStoreToProps)(VerifyAccountComponent)

export default VerifyAccount
