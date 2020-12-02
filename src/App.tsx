import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import HooksProvider from './hooks'
import Routes from './routes'

import GlobalStyle from './styles/global'

const App: React.FC = () => (
  <BrowserRouter>
    <HooksProvider>
      <Routes />
    </HooksProvider>

    <GlobalStyle />
  </BrowserRouter>
)

export default App
