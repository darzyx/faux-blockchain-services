import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import styled from 'styled-components'

import Navbar from './components/Navbar'
import Home from './components/Home'

const AppWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <AppWrapper>
          <Navbar />
          <Route exact path='/' component={Home}/>
        </AppWrapper>
      </BrowserRouter>
    )
  }
}

export default App
