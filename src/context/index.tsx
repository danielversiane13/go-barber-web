import React from 'react'

import { AuthProvider } from '../hooks/AuthContext'

const ContextProvider: React.FC = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>
}

export default ContextProvider
