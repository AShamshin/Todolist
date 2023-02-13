import React, { useState } from 'react';
import { v1 } from 'uuid';
import './App.css';
import { Todolist } from './Todolist';

export type FilterValuesType = 'all' | 'active' | 'completed';

function App() {
  let [tasks, setTasks] = useState([
    { id: v1(), title: 'HTML&CSS', isDone: true },
    { id: v1(), title: 'JS', isDone: true },
    { id: v1(), title: 'ReactJS', isDone: false },
    { id: v1(), title: 'Rest API', isDone: false },
    { id: v1(), title: 'GraphQL', isDone: false },
  ]);

  const addTack = (newTitle: string) => {
    const newTask = { id: v1(), title: newTitle, isDone: false };
    setTasks([newTask, ...tasks]);
  };

  function removeTask(id: string) {
    let filteredTasks = tasks.filter((t) => t.id !== id);
    setTasks(filteredTasks);
  }

  return (
    <div className='App'>
      <Todolist
        title='What to learn'
        removeTask={removeTask}
        tasks={tasks}
        addTack={addTack}
      />
    </div>
  );
}

export default App;
