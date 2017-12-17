import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Switch, BrowserRouter, Route } from 'react-router-dom'

import {
  Layout,
  Account
} from './components/index';



import { store, history } from './store'

import HlsStream from './components/Media/HlsStream'


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
        <div >
          <HlsStream />
        </div>
    </Provider>
  </BrowserRouter>,
  document.getElementById('app')
)
