import React from 'react'
import { Container } from './styles'
import { useTasks } from '../../../../hooks/tasks'
import Task from './Task'
import { useTransition } from 'react-spring'

const ListTasks: React.FC = () => {
  const { tasks } = useTasks()

  const transition = useTransition(tasks, {
    keys: task => task.id,
    from: { transform: 'translateX(-140%)' },
    enter: { transform: 'translateX(0%)' },
    leave: { transform: 'translateX(-140%)' }
  })

  return (
    <Container>
      {transition((style, task) => (
          <Task style={style} task={task}/>
      ))}
    </Container>
  )
}

export default ListTasks
