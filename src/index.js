import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Switch, BrowserRouter, Route } from 'react-router-dom'

import {
  Layout,
  Account
} from './components/index';

const { Main } = Account
import { store, history } from './store'


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
        <div >
          <Main />

          <Switch>
            <Route exact path="/contributions" component={Account['Register']}/>
            <Route exact path="/register" component={Account['Register']}/>
          </Switch>
        </div>
    </Provider>
  </BrowserRouter>,
  document.getElementById('app')
)
