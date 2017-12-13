import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Switch, BrowserRouter, Route } from 'react-router-dom'

import {
  Layout
} from './components/index';

const {
  Header
} = Layout

import { store, history } from './store'


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
        <div >
          <Switch>
            {/* <Route exact path="/" component={Main}/> */}
            <Route exact path="/" component={Header}/>
          </Switch>
        </div>
    </Provider>
  </BrowserRouter>,
  document.getElementById('app')
)
