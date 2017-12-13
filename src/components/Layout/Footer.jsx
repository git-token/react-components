import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Panel, Row, Col, Table, Button } from 'react-bootstrap'


class FooterComponent extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    const { dispatch } = this.props

  }

  render() {

    const { dispatch } = this.props

    return (
      <Panel style={{
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          height: '100px',
          borderStyle: 'solid',
          borderColor: '#e95420'
        }}
        collapsible expanded={true}
        >
          <div style={{ textAlign: 'center' }}>
            <p>Testing</p>
          </div>
      </Panel>
    )
  }
}


const mapStoreToProps = (store, props) => {
  return {}
}

const Footer = connect(mapStoreToProps)(FooterComponent)

export default Footer
