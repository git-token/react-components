import React, { Component } from 'react'
import { connect } from 'react-redux'
import Hls from 'hls.js'

import {
  Grid,
  Col,
  Row,
  Panel
} from 'react-bootstrap'

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
            hls.destroy();
            break;
          }
        }
      });

      hls.attachMedia(this.videoNode);
      hls.on(Hls.Events.MANIFEST_PARSED, function(parsed) { });

    }


  }

  render() {
    const { Media: { streamUrl, streamLive } } = this.props

    if (streamLive) {
      return (
        <div style={{
          // backgroundColor: 'rgba(0,0,0,0.3)',
          paddingBottom: '150px'
        }}>
          <Grid>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12}>
                <center>
                  <br/>
                  <div >
                    <p style={{
                      fontSize: '96px',
                      zIndex: '1',
                      paddingBottom: '50px'
                    }}>GitToken Live Stream</p>
                  </div>
                  <br/>
                  <video
                    width={"100%"}
                    ref={(node) => { this.videoNode = node }}
                    autoPlay controls data='{}'
                    style={{
                      zIndex: '1',
                      position: 'absolute'
                    }}
                    >
                  </video>
                  <svg
                    width={"100%"}
                    viewBox="0 0 1000 1000"
                    style={{
                      zIndex: '-1',
                      marginTop: '-200px'
                    }}>

                    <defs>
                      <radialGradient id="g1" fx="50%" fy="50%" cx="50%" cy="50%" r="50%">
                          <stop stopColor="#cc5333" offset="1%"/>
                          <stop stopColor="#320551" offset="100%"/>
                      </radialGradient>
                    </defs>

                    <circle cx="500" cy="500" r="400" style={{fill: 'url(#g1)'}}/>
                </svg>
                </center>
                <br/>
              </Col>
            </Row>
          </Grid>
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
