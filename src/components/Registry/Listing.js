import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col, Panel } from 'react-bootstrap'

class ListingComponent extends Component {
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
  return {
    Layout: store.Layout
  }
}

const Listing = connect(mapStoreToProps)(ListingComponent)

export default Listing
