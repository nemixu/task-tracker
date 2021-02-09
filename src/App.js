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

// Toggle reminder

const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => 
      task.id === id ? { ...task, reminder:
      !task.reminder } : task 
      )
    )
}
  return (
    <div className="container">
        <Header />
        {tasks.length > 0 ? (
          <Tasks tasks={tasks} 
          onDelete={deleteTask} onToggle={toggleReminder}/>) : ('No tasks to show')}
    </div>
  )
};

export default App;
