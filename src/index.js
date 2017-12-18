import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Switch, BrowserRouter, Route } from 'react-router-dom'

import {
  Grid
} from 'react-bootstrap'


import {
  Layout,
  Account,
  Media
} from './components/index';

const { Header } = Layout
const { HlsStream } = Media

import { store, history } from './store'




ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
        <Grid >
          <Header />
          {/* <HlsStream /> */}
        </Grid>
    </Provider>
  </BrowserRouter>,
  document.getElementById('app')
)
