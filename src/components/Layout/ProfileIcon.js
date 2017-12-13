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

    return (
      <div>
        <Image
          src="https://avatars2.githubusercontent.com/u/2837196?v=4"
          circle
          responsive
          style={{
            margin: '5px',
            marginTop: '25px',
            height: '42px',
            float: 'right'
          }}
          onClick={() => {alert('Hello')}}
        />
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
