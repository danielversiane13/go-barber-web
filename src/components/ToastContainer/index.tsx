import React from 'react'
import { useTransition } from 'react-spring'

import Toast from './Toast'

import { Container } from './styles'

export interface ToastMessage {
  id: string
  type?: 'info' | 'success' | 'error'
  title: string
  description?: string
}

interface ToastProps {
  messages: ToastMessage[]
}

const ToastContainer: React.FC<ToastProps> = ({ messages }) => {
  const messagesWithTransiction = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%' },
      enter: { right: '0%' },
      leave: { right: '-120%' }
    }
  )

  return (
    <Container>
      {messagesWithTransiction.map(({ item, key, props }) => (
        <Toast key={key} message={item} style={props} />
      ))}
    </Container>
  )
}

export default ToastContainer
