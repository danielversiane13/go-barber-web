import React from 'react'

import HooksProvider from './hooks'
import SignIn from './pages/SignIn'
// import SignUp from './pages/SignUp'

import GlobalStyle from './styles/global'

const App: React.FC = () => (
  <>
    <HooksProvider>
      <SignIn />
    </HooksProvider>

    <GlobalStyle />
  </>
)

export default App
