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

interface updateData {
  id_task: string;
  status: 'complete' | 'incomplete' | 'unsuccessful';
}

interface TasksContextProps {
  deleteTask(id_task: string): Promise<void>;
  addTask(data: FormData): Promise<void>;
  updateStatus({ id_task, status }: updateData): Promise<string>;
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
  }, [filterDate, user, token])

  const deleteTask = useCallback(async (id_task: string): Promise<void> => {
    await api.delete(`/tasks/${id_task}`, {
      params: {
        id_task
      },
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    const newTasks = tasks.filter(task => task.id !== id_task)
    setTasks(newTasks)
  }, [tasks, token])

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
  }, [token])

  const updateStatus = useCallback(async ({ id_task, status }: updateData): Promise<string> => {
    const newStatus = status === 'complete' ? 'incomplete' : 'complete'
    await api.patch(`/tasks/${id_task}`,
      {
        status: newStatus
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )

    return newStatus
  }, [token])

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
