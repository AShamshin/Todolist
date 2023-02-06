import { useState } from 'react';
import './App.css';
import { TaskType, Todolist } from './Todolist';

function App() {
  //   let tasks1 = [
  //     { id: 1, title: 'HTML&CSS', isDone: true },
  //     { id: 2, title: 'JS', isDone: true },
  //     { id: 3, title: 'ReactJS', isDone: false },
  //   ];

  let [tasks1, setTasks1] = useState<Array<TaskType>>([
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'ReactJS', isDone: false },
  ]);

  const removeTask = (taskId: number) => {
    // tasks1 = tasks1.filter((el: TaskType) => el.id !== taskId);
    setTasks1(tasks1.filter((el: TaskType) => el.id !== taskId));
  };

  return (
    <div className='App'>
      <Todolist title='What to learn' tasks={tasks1} removeTask={removeTask} />
      {/* <Todolist title='Songs' tasks={tasks2} /> */}
    </div>
  );
}

export default App;
