import Promise, { promisifyAll } from 'bluebird'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, BrowserRouter, Route } from 'react-router-dom'

import {
  Row,
  Col,
  Breadcrumb,
  Button,
  Jumbotron,
  Panel
} from 'react-bootstrap'

import Welcome from './Welcome'
import VerifyAccount from './VerifyAccount'
import MetaMask from './MetaMask'
import TermsOfService from '../../Legal/TermsOfService'

class MainComponent extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    const { dispatch, Actions: { account } } = this.props
    dispatch(account.metamask())

    const path = location.pathname
      .replace('/account/setup/', '')
      .replace('/account/setup', '')

    const activeStep = path.length ? path : 'welcome'

    dispatch({
      type: 'SET_ACCOUNT_SETUP_DETAILS',
      id: 'activeStep',
      value: activeStep
    })
  }

  nodes() {
    const { AccountSetup: { steps, activeStep } } = this.props


    const x = 500
    const y = 500
    const distance = 320
    const lineLength = 270

    return Object.keys(steps).map((step, i) => {
      const { title } = steps[step]

      const active = step == activeStep ? true : false
      const d = `M ${x} ${25 + y + (distance*(i))} L ${x} ${25 + y + (distance*(i)) + lineLength}`

      return (
        <svg>
          <defs>
            <radialGradient id="g2" fx="50%" fy="50%" cx="50%" cy="50%" r="50%">
                <stop stopColor="white" offset="10%"/>
                <stop stopColor="#CB4B16" offset="40%"/>
                <stop stopColor="#320551" offset="100%"/>
            </radialGradient>
          </defs>

          { active ? <circle cx={x} cy={y + (distance*(i+1)) } r="65" style={{fill: 'url(#g2)'}}/> : null }

          <path d={d}
            fill="transparent"
            strokeLinejoin={"round"}
            stroke="#fff"
            strokeWidth="36"
          />

          <circle
            cx={x}
            cy={y + (distance*(i+1)) }
            r="30"
            fill="transparent"
            stroke="#fff"
            strokeWidth="16"
          />

          <text
            x={'600'}
            y={y + (320*(i+1)) }
            fill={ active ? '#fff' : "#320551"}
            fontSize={'65px'}
            onClick={() => { location.href=`/account/setup/${step}` }}>
            {title}
          </text>

          {/* <path d="M 500 840 L 500 1100"
            fill="transparent"
            strokeLinejoin={"round"}
            stroke="#cc5333"
            strokeWidth="36"
          /> */}
        </svg>
      )
    })
  }

  setupNode() {


    return (
      <svg height={'100%'} width={"100%"} viewBox="0 0 1200 3000">

        <defs>
          <radialGradient id="g1" fx="50%" fy="50%" cx="50%" cy="50%" r="50%">
              <stop stopColor="#210138" offset="10%"/>
              <stop stopColor="#320551" offset="100%"/>
          </radialGradient>
        </defs>

        <circle cx="500" cy="500" r="2200" style={{fill: 'url(#g1)'}}/>

        <defs>
          <radialGradient id="g2" fx="50%" fy="50%" cx="50%" cy="50%" r="50%">
              <stop stopColor="white" offset="10%"/>
              <stop stopColor="#CB4B16" offset="40%"/>
              <stop stopColor="#320551" offset="100%"/>
          </radialGradient>
        </defs>

        <circle cx="500" cy="500" r="65" style={{fill: 'url(#g2)'}}/>

        {this.nodes()}

        <path d="M 530 500 L 730 500 L 730 600 L 500 700 L 300 600 L 300 400 L 500 300 L 710 390 "
          fill="transparent"
          strokeLinejoin={"round"}
          stroke="#CB4B16"
          strokeWidth="36"
        />

        <circle
          cx="500"
          cy="500"
          r="30"
          fill="transparent"
          stroke="#CB4B16"
          strokeWidth="16"
        />

        <circle
          cx="730"
          cy="400"
          r="30"
          fill="transparent"
          stroke="#CB4B16"
          strokeWidth="16"
        />


      </svg>
    )
  }


  render() {
    const { dispatch, AccountSetup: { steps, activeStep } } = this.props

    return (
      <div>
        <Row>
          <Col lg={12} >
            <Jumbotron style={{ height: '800px' }}>
              <Col lg={4} >
                <Panel style={{ textAlign: 'left' }}>
                  {/* <Breadcrumb>
                    {this.steps({ steps, activeStep })}
                  </Breadcrumb> */}
                  {this.setupNode()}
                </Panel>
              </Col>
              <Col lg={8}>
                <Panel>
                  <br/>
                  <br/>
                  <Switch>
                    <Route exact path={'/setup'} component={Welcome}/>
                    <Route path={'/setup/welcome'} component={Welcome}/>
                    <Route path={'/setup/terms'} render={() => {
                      return (
                        <TermsOfService
                          agree={() => {
                            dispatch({ type: 'SET_ACCOUNT_SETUP_DETAILS', id: 'activeStep', value: 'metamask' })
                            location.href = '/account/setup/metamask'
                          }}
                          organizationLink={'https://github.com/git-token'}
                          tokenDetails={{
                            name: 'GitToken',
                            symbol: 'GTK',
                            address: '0x0'
                          }}
                        />
                      )
                    }}/>
                    <Route path={'/setup/metamask'} component={MetaMask}/>
                    <Route path={'/setup/verify'} component={VerifyAccount}/>
                    <Route path={'/setup/organization'} component={VerifyAccount}/>
                    <Route path={'/setup/finish'} component={VerifyAccount}/>
                  </Switch>
                </Panel>
              </Col>
            </Jumbotron>
          </Col>
        </Row>
      </div>
    )
  }
}


const mapStoreToProps = (store, props) => {
  return {
    Actions: store.Actions,
    Account: store.Account,
    AccountSetup: store.AccountSetup
  }
}

const Main = connect(mapStoreToProps)(MainComponent)

export default Main
