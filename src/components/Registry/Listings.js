import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col, Panel } from 'react-bootstrap'

class ListingsComponent extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}


const mapStoreToProps = (store, props) => {
  return {}
}

const Listings = connect(mapStoreToProps)(ListingsComponent)

export default Listings
