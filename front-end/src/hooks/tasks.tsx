import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import api from '../services/api'
import filterDate from '../utils/filterDate'
import { useAuth } from './auth'
import { parseISO } from 'date-fns'

export interface task {
  id: string;
  tasks: string;
  deadline: string;
  status: 'complete' | 'incomplete' | 'unsuccessful';
}

interface FormData {
  task: string;
  data: string;
}

interface TasksContextProps {
  deleteTask(id_task: string): Promise<void>;
  addTask(data: FormData): Promise<void>;
  updateStatus(id_task: string): Promise<void>;
  tasks: task[];
}

const TasksContext = createContext<TasksContextProps>({} as TasksContextProps)

const TasksProvider: React.FC = ({ children }) => {
  const { user, token } = useAuth()
  const [tasks, setTasks] = useState<task[]>([])

  useEffect(() => {
    if (user) {
      api.get('/tasks',
        {
          params: {
            id_user: user.id
          },
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(response => {
          setTasks(filterDate(response.data))
        })
        .catch(err => console.log(err.message))
    }
  }, [filterDate])

  const deleteTask = useCallback(async (id_task: string): Promise<void> => {
    await api.delete('/tasks', {
      params: {
        id_task
      },
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    const newTasks = tasks.filter(task => task.id !== id_task)
    setTasks(newTasks)
  }, [tasks])

  const addTask = useCallback(async (data: FormData): Promise<void> => {
    const response = await api.post('/tasks',
      {
        id_user: user.id,
        tasks: data.task,
        deadline: parseISO(data.data).toISOString(),
        status: 'incomplete'
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )

    setTasks(props => filterDate([...props, response.data]))
  }, [])

  const updateStatus = useCallback(async (id_task: string): Promise<void> => {
    const response = await api.patch('/tasks',
      {
        id_task
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
  }, [])

  return (
    <TasksContext.Provider value={{ deleteTask, addTask, updateStatus, tasks }}>
      { children }
    </TasksContext.Provider>
  )
}

const useTasks = () => {
  const context = useContext(TasksContext)
  return context
}

export { TasksProvider, useTasks }
