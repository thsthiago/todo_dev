import React from 'react'
import { FaClipboardList } from 'react-icons/fa'
import Header from '../../components/Header'
import Form from './components/Form'
import ListTasks from './components/ListTasks'
import { Container } from './styles'

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />
      <section>
        <div>
          <h1>
            <FaClipboardList />
            Adicione suas tarefas
          </h1>
          <Form />
        </div>
      </section>

      <ListTasks />
    </Container>
  )
}

export default Dashboard
