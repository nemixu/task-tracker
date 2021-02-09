import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
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

//Add Task

const addTask = (task) => {
  const id = Math.floor(Math.random() * 1000) + 1
  const newTask = { id, ...task}
  setTasks([...tasks, newTask])
}
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
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
        {showAddTask  && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (
          <Tasks tasks={tasks} 
          onDelete={deleteTask} onToggle={toggleReminder}/>) : ('No tasks to show')}
    </div>
  )
};

export default App;
