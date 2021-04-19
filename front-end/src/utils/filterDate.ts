import { compareAsc, parseISO } from 'date-fns'

interface task {
  id: string;
  tasks: string;
  deadline: string;
  status: 'incomplete' | 'complete' | 'unsuccessful';
}

const filterDate = (tasks: task[]): task[] => {
  const dates: Date[] = []
  tasks.forEach((taskDate) => {
    dates.push(parseISO(taskDate.deadline.split('T')[0]))
  })

  const dateFilter = dates.sort(compareAsc)
  const myTasks = []

  for (const i of dateFilter) {
    const data = String(i.toISOString())
    const date = data.split('T')
    const dateTask = tasks.findIndex(task => task.deadline.toString().split('T')[0] === date[0])
    myTasks.push(tasks[dateTask])
    tasks.splice(dateTask, 1)
  }

  return myTasks as task[]
}

export default filterDate
