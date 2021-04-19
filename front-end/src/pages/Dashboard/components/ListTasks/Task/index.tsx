import React, { useCallback, useEffect, useState } from 'react'
import { BsInfoCircle } from 'react-icons/bs'
import { FiCalendar } from 'react-icons/fi'
import { RiCheckboxCircleLine, RiDeleteBin6Line } from 'react-icons/ri'
import { task, useTasks } from '../../../../../hooks/tasks'
import dateValidate from '../../../../../utils/dataValidate'
import formatDate from '../../../../../utils/formatDate'
import { Container } from './styles'

interface statusTask {
  status: 'incomplete' | 'complete' | 'unsuccessful';
}

interface statusData {
  statusTask: 'incomplete' | 'complete' | 'unsuccessful';
  data: string;
}

interface taskData {
  task: task;
  style: object;
}

const Task: React.FC<taskData> = ({ task, style }: taskData) => {
  const { deleteTask, updateStatus } = useTasks()
  const [status, setStatus] = useState({} as statusTask)

  const statusTask = useCallback(({ statusTask, data }: statusData) => {
    if (statusTask === 'complete') return setStatus({ status: statusTask })
    setStatus({ status: dateValidate(data) })
  }, [])

  useEffect(() => {
    statusTask({ statusTask: task.status, data: task.deadline })
  }, [])

  const deleteTasks = useCallback(async (id_tasks: string) => {
    const response = await deleteTask(id_tasks)
  }, [deleteTask])

  const updateStatusTask = useCallback(async (id_tasks: string) => {
    setStatus({ status: 'complete' })
    updateStatus(id_tasks)
  }, [updateStatus])

  const tooltip = {
    incomplete: 'Tarefa pendente',
    complete: 'Tarefa concluída',
    unsuccessful: 'A data dessa tarefa expirou'
  }

  return (
    <Container status={status.status} style={style}>
      <strong>{task.tasks}</strong>
      <div>
        <p>
          <span>{formatDate(task.deadline)}</span>
          <FiCalendar size={30} />
        </p>
        <p>
          <span>{tooltip[status.status]}</span>
          <BsInfoCircle size={30} />
        </p>
        <button type="button" onClick={() => deleteTasks(task.id)}>
          <RiDeleteBin6Line size={35}/>
        </button>
        <button type="button" onClick={() => updateStatusTask(task.id)}>
          <RiCheckboxCircleLine size={35}/>
        </button>

      </div>
    </Container>
  )
}
export default Task
