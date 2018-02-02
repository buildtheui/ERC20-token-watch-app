import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './containers/App'
import getWeb3 from './utils/getWeb3'

import './assets/css/loading.min.css'

// loading while web3 is initialized
document.getElementById('root').innerHTML = '<div class="center-loading">' +
  '<div class="sk-folding-cube" >' +
  '<div class="sk-cube1 sk-cube"></div>' +
  '<div class="sk-cube2 sk-cube"></div>' +
  '<div class="sk-cube4 sk-cube"></div>' +
  '<div class="sk-cube3 sk-cube"></div>' +
  '</div >' +
  '</div >'

// Initialize web3 and set in Redux.
let renderComponent = <h1>No se puede encontrar conexión con algún nodo..</h1>

getWeb3
  .then(results => {
    renderComponent = <App />
    renderAppAfterWeb3(renderComponent)
    console.log('Web3 initialized!')
  })
  .catch(() => {
    renderAppAfterWeb3(renderComponent)
    console.log('Error in web3 initialization.')
  })

function renderAppAfterWeb3(component) {
  ReactDOM.render(
    <Provider store={store}>
      {component}
    </Provider>,
    document.getElementById('root')
  );
}


