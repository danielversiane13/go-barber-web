import React from 'react'

import ContextProvider from './context'
import SignIn from './pages/SignIn'
// import SignUp from './pages/SignUp'

import GlobalStyle from './styles/global'

const App: React.FC = () => (
  <>
    <ContextProvider>
      <SignIn />
    </ContextProvider>

    <GlobalStyle />
  </>
)

export default App
