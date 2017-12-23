import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Image
} from 'react-bootstrap'

class ProfileIconComponent extends Component {
  constructor() {
    super()
  }


  render() {
    let { width, height, style, opacity, url, onClick, viewBox } = this.props


		opacity = opacity ? opacity : '0'
		width = width ? width : '50%'
		height = height ? height : '50%'
		style = style ? style : null
    viewBox = viewBox ? viewBox : '0 0 1000 1000'

    // return (
    //   <div>
    //     <Image circle />
    //   </div>
    // )

    return (
      <div style={{ float: 'right' }} onClick={onClick}>
        <svg width={width} height={height} viewBox={viewBox} style={style} >
          <defs>
            <pattern id="img1" patternUnits="userSpaceOnUse" width={'60%'} height={'60%'}>
              <image xlinkHref={url} x="5%" y="5%" width={'60%'} height={'60%'} />
            </pattern>
          </defs>

          <path d="M 550 250 L 550 350 L 350 450 L 150 350 L 150 150 L 350 50 L 550 150 L 550 250 "
  					fill="url(#img1)"
  					strokeLinejoin={"round"}
  					stroke="#cc5333"
  					strokeWidth="38"
  				/>

  				<circle cx="550" cy="150" r="38" fill="#cc5333"/>
  				<circle cx="550" cy="150" r="20" fill="#fff"/>
  			</svg>
      </div>
    )
  }
}


const mapStoreToProps = (store, props) => {
  return {
    Actions: store.Actions
  }
}

const ProfileIcon = connect(mapStoreToProps)(ProfileIconComponent)

export default ProfileIcon
