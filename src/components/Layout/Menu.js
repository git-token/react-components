import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  ButtonGroup,
  Button
} from 'react-bootstrap'

class MenuComponent extends Component {
  constructor() {
    super()
  }


  render() {

    return (
      <div style={{
        margin: '5px',
        marginTop: '25px',
        float: 'right'
      }}>
        <ButtonGroup>
          <Button bsStyle={'link'}><a href="https://github.com/git-token" target="_blank">What is GitToken?</a></Button>
          <Button bsStyle={'link'}><a href="https://github.com/git-token" target="_blank">GitHub</a></Button>
          {/* <Button bsStyle={'link'}><a href="https://github.com/git-token" target="_blank">Road Map</a></Button> */}
          {/* <Button bsStyle={'link'}><a href="https://medium.com/gittoken" target="_blank">Publications</a></Button> */}
          {/* <Button bsStyle={'link'}><a href="https://gitter.im/git-token/Lobby" target="_blank">Contact</a></Button> */}
          {/* <Button bsStyle={'link'}><a href="https://github.com/git-token/documentation/wiki/Motivation" target="_blank">Wiki</a></Button> */}
        </ButtonGroup>
      </div>
    )
  }
}


const mapStoreToProps = (store, props) => {
  return {
    Actions: store.Actions
  }
}

const Menu = connect(mapStoreToProps)(MenuComponent)

export default Menu
