import React, {} from 'react'
import { ToastMessage } from '../../hooks/toast'
import { Container } from './styles'
import { useTransition } from 'react-spring'
import Toast from './Toast'

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const transition = useTransition(messages, {
    keys: message => message.id,
    from: { right: '-120%', opacity: 0 },
    enter: { right: '0%', opacity: 1 },
    leave: { right: '-120%', opacity: 0 }
  })

  return (
    <Container>
      {transition((style, item) => (
        <Toast style={style} message={item}/>
      ))}
    </Container>
  )
}

export default ToastContainer
