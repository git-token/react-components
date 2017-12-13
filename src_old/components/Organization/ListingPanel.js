import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  VictoryChart,
  VictoryGroup,
  VictoryArea
} from 'victory'

import { VictoryTheme } from '../Themes/index.js'

class TokenSupplyChartComponent extends Component {
  constructor() {
    super()
  }

  componentDidMount() {}

  render() {
    const { registry } = this.props

    return (
      <div style={{ textAlign: 'center', color: '#fff' }}>
        <div style={{
            height: '250px',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            margin: 'auto',
            marginBottom: '-20px'
        }}>
        <VictoryChart
          scale={{ x: 'time', y: 'linear' }}
          theme={VictoryTheme}
          >
          <VictoryGroup
            style={{
              data: {strokeWidth: 3, fillOpacity: 0.4}
            }}
          >
            <VictoryArea
              style={{
                data: {fill: "cyan", stroke: "cyan"}
              }}
              data={[
                {x: new Date().getTime() + (2*1000*60*60), y: 2},
                {x: new Date().getTime() + (3*1000*60*60), y: 3},
                {x: new Date().getTime() + (5*1000*60*60), y: 5},
                {x: new Date().getTime() + (4*1000*60*60), y: 4},
                {x: new Date().getTime() + (7*1000*60*60), y: 7}
              ]}
            />
          </VictoryGroup>
        </VictoryChart>
        </div>
      </div>
    )
  }
}


const mapStoreToProps = (store, props) => {
  return {
    Registry: store.Registry
  }
}

const TokenSupplyChart = connect(mapStoreToProps)(TokenSupplyChartComponent)

export default TokenSupplyChart
