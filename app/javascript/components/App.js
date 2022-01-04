import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { provider } from 'react-redux'

import HelloWorld from './HelloWorld'
import configureStore from '../configureStore'

const store = configureStore()

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" render={() => ("Home!")} />
            <Route path="/hello" render={() => <HelloWorld greeting="Friend"/>} />
          </Routes>
        </BrowserRouter>
      </provider>
    );
  }
}

export default App
