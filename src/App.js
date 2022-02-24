import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = (props) => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Doctors Appointment",
        day: "Feb 5th at 2:30pm",
        reminder: true,
    },
    {
        id: 2,
        text: "School Appointment",
        day: "Feb 23th at 12:30pm",
        reminder: true,
    },
    {
        id: 3,
        text: "Dentist Appointment",
        day: "March 9th at 5:30pm",
        reminder: true,
    }
    ])

    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    } 

  return (
    <div className="container">
      <Header title="Task Tracker" />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'No Tasks To Show'}
    </div>
  );
};

export default App;
