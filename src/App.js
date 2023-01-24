import {useState} from 'react' 
import Header from './components/Header'
import Tasks from './components/Tasks'


const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 4th at 2:30pm',
        reminder: true,
    }
])
  return (
    <div className="container">
     <Header  />
     <Tasks tasks = {tasks}  />
    </div>
  );
}

export default App;
