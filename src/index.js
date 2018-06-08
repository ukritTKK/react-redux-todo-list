import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store.js'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App'


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
