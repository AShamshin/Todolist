import React, { ChangeEvent, useState, KeyboardEvent } from 'react';
import { FilterValuesType } from './App';

type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

type PropsType = {
  title: string;
  tasks: Array<TaskType>;
  removeTask: (taskId: string) => void;
  addTack: (newTitle: string) => void;
};

export function Todolist(props: PropsType) {
  const [newTitle, setNewTitle] = useState('');

  let [filter, setFilter] = useState<FilterValuesType>('all');

  function changeFilter(value: FilterValuesType) {
    setFilter(value);
  }

  let tasksForTodolist = props.tasks;

  if (filter === 'active') {
    tasksForTodolist = props.tasks.filter((t) => t.isDone === false);
  }
  if (filter === 'completed') {
    tasksForTodolist = props.tasks.filter((t) => t.isDone === true);
  }

  const addTaskHandler = () => {
    props.addTack(newTitle);
    setNewTitle('');
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.currentTarget.value);
  };

  const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addTaskHandler();
    }
  };

  const tsarChangeFilterHandler = (valueFilter: FilterValuesType) => {
    changeFilter(valueFilter);
  };
  const removeTaskHandler = (tId: string) => {
    props.removeTask(tId);
  };

  const mappedTasks = tasksForTodolist.map((t) => {
    return (
      <li key={t.id}>
        <input type='checkbox' checked={t.isDone} />
        <span>{t.title}</span>
        <button onClick={() => removeTaskHandler(t.id)}>x</button>
      </li>
    );
  });

  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input
          onChange={onChangeHandler}
          value={newTitle}
          onKeyDown={onKeyDownHandler}
        />
        <button onClick={addTaskHandler}>+</button>
      </div>
      <ul>{mappedTasks}</ul>

      <div>
        <button onClick={() => tsarChangeFilterHandler('all')}>All</button>
        <button onClick={() => tsarChangeFilterHandler('active')}>
          Active
        </button>
        <button onClick={() => tsarChangeFilterHandler('completed')}>
          Completed
        </button>
      </div>
    </div>
  );
}
