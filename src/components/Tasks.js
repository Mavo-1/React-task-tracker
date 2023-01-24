import {useState} from 'react' 



const Tasks = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 4th at 2:30pm',
            reminder: true,
        }
    ])
  return (
    <>
    {tasks.map((task)=>(
        <h3 key={task.id}>{task.text}</h3>
    ))}
    </>
  )
}

export default Tasks