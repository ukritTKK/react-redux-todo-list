import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './containers/home'

class App extends Component {
  render() {
    return (
      <div>
        <main>
          <BrowserRouter>
            <Route exact path='/' component={Home} />
          </BrowserRouter>
        </main>
      </div>
    )
  }
}

export default App
