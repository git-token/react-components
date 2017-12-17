import React, { Component } from 'react'
import { connect } from 'react-redux'
import Hls from 'hls.js'

class HlsStreamComponent extends Component {
  constructor() {
    super()

  }

  componentWillMount() {
    const { dispatch } = this.props
    dispatch({ type: 'SET_MEDIA_DETAILS', id: 'streamLive', value: true })
  }

  componentDidMount() {
    const { dispatch, Media: { streamUrl, streamLive } } = this.props

    if(Hls.isSupported()) {
      var hls = new Hls();
      hls.loadSource(streamUrl);
      hls.on(Hls.Events.ERROR, function (event, data) {
        if (data.fatal) {
          switch(data.type) {
          case Hls.ErrorTypes.NETWORK_ERROR:
            dispatch({ type: 'SET_MEDIA_DETAILS', id: 'streamLive', value: false })
            hls.destroy();
            break;
          case Hls.ErrorTypes.MEDIA_ERROR:
            console.log("fatal media error encountered, try to recover");
            hls.recoverMediaError();
            break;
          default:
          // cannot recover
            hls.destroy();
            break;
          }
        }
      });

      hls.attachMedia(this.videoNode);
      hls.on(Hls.Events.MANIFEST_PARSED, function(parsed) {

      });

    }


  }

  render() {
    const { Media: { streamUrl, streamLive } } = this.props

    if (streamLive) {
      return (
        <div data-vjs-player>
          <center>
            <h1>GitToken Developer Live Stream</h1>
            <video ref={(node) => { this.videoNode = node }} autoPlay controls data='{}'></video>
          </center>
        </div>
      )
    } else {
      return null
    }
  }
}


const mapStoreToProps = (store, props) => {
  return {
    Media: store.Media
  }
}

const HlsStream = connect(mapStoreToProps)(HlsStreamComponent)

export default HlsStream
