import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactHLS from 'react-hls'


class RtmpStreamComponent extends Component {
  constructor() {
    super()


  }

  render() {

    const { Media: { rtmpUrl } } = this.props

    return (
      <ReactHLS url={rtmpUrl} />
    )
  }
}


const mapStoreToProps = ({ store, props }) => {
  return {
    Media: store.Media
  }
}

const RtmpStream = connect(mapStoreToProps)(RtmpStreamComponent)

export default RtmpStream
