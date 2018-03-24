import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'

import Navbar from './components/Navbar'
import Header from './components/Header'

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
          <Header />
        </AppWrapper>
      </BrowserRouter>
    )
  }
}

export default App
