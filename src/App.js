import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'


const App = () => {
  const [tasks, setTasks] = useState([
    {
        id:1,
        text: 'Do some more reacjs',
        day: 'Feb 16th at 2:30pm',
        reminder: true, 
    },
    {
        id:2,
        text: 'Learn sass',
        day: 'Feb 19th at 2:30pm',
        reminder: false, 
    },
    {
        id:3,
        text: 'Go on a walk',
        day: 'Feb 20th at 3pm',
        reminder: true, 
    },
])

//delete a task

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}
  return (
    <div className="container">
        <Header title='Task Tracker' />
        {tasks.length > 0 ?<Tasks tasks={tasks} onDelete={deleteTask} /> : 'No tasks to show'}
    </div>
  )
};

export default App;
