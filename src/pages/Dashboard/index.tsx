import React from 'react'

import Button from '../../components/Button'
import { useAuth } from '../../hooks/auth'

import { Container } from './styles'

const Dashboard: React.FC = () => {
  const { signOut } = useAuth()
  return (
    <Container>
      <div>
        <h1>Dashboard</h1>
        <h2>Você está logado !</h2>
        <Button onClick={signOut}>Deslogar</Button>
      </div>
    </Container>
  )
}

export default Dashboard
