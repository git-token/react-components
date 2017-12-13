import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Web3 from 'web3'

import { Main } from './components/index';
import { store, history } from './store'
import { web3Provider } from '../app.config'

window.addEventListener('load', () => {

  if (typeof window.web3 !== 'undefined') {
    window.web3 = new Web3(window.web3.currentProvider)
    window.web3.eth.getAccounts((error, accounts) => {
      if (error) { alert(error) }
      if (!accounts.length) { alert('Sign into MetaMask') }
    })
  } else {
    alert('Download MetaMask')
    window.web3 = new Web3(new Web3.providers.HttpProvider(web3Provider))
  }


  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
          <div >
            <Switch>
              <Route exact path="/" component={Main}/>
            </Switch>
          </div>
      </Provider>
    </BrowserRouter>,
    document.getElementById('app')
  )
})
