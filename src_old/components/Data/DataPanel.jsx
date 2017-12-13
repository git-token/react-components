import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col, Panel } from 'react-bootstrap'

class DataPanelComponent extends Component {
  constructor() {
    super()
  }

  toggleNav({ id, expanded }) {
    const { dispatch } = this.props
    dispatch({ type: 'SET_LAYOUT_DETAILS', id, value: expanded })
  }

  render() {

    const { dispatch, Layout: { expandHeader, expandLeftSideNav, expandRightSideNav } } = this.props

    return (
      <div>
        <Panel style={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            margin: '5px',
            borderStyle: 'solid',
            borderColor: '#e95420',
            height: `${ expandHeader ? '100%' : '40px'}`
          }}
          header={(<h3>Data Panel</h3>)}
          onClick={this.toggleNav.bind(this, {
            id: 'expandHeader',
            expanded: !expandHeader
          })}
          bsStyle={'secondary'}
          collapsible expanded={expandHeader}
          onMouseEnter={this.toggleNav.bind(this, {
            id: 'expandHeader',
            expanded: true
          })}
          onMouseLeave={this.toggleNav.bind(this, {
            id: 'expandHeader',
            expanded: false
          })}
          >
            <Col sm={3}>
              <Panel style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  margin: '5px',
                  borderStyle: 'solid',
                  borderColor: '#e95420',
                  height: '150px'
                }}
                >
                  <h1>Data</h1>
              </Panel>
            </Col>
            <Col sm={3}>
              <Panel style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  margin: '5px',
                  borderStyle: 'solid',
                  borderColor: '#e95420',
                  height: '150px'
                }}
                >
                  <h1>Data</h1>
              </Panel>
            </Col>
            <Col sm={3}>
              <Panel style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  margin: '5px',
                  borderStyle: 'solid',
                  borderColor: '#e95420',
                  height: '150px'
                }}
                >
                  <h1>Data</h1>
              </Panel>
            </Col>
            <Col sm={3}>
              <Panel style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  margin: '5px',
                  borderStyle: 'solid',
                  borderColor: '#e95420',
                  height: '150px'
                }}
                >
                  <h1>Data</h1>
              </Panel>
            </Col>
        </Panel>
      </div>
    )
  }
}


const mapStoreToProps = (store, props) => {
  return {
    Layout: store.Layout
  }
}

const DataPanel = connect(mapStoreToProps)(DataPanelComponent)

export default DataPanel
