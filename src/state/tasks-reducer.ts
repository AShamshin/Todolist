import { TasksStateType } from '../App';
import {
  AddTodolistActionType,
  RemoveTodolistActionType,
} from './todolists-reducer';

export type RemoveTasksActionType = {
  type: 'REMOVE-TASKS';
  id: string;
  todolistId: string;
};

export type AddTasksActionType = {
  type: 'ADD-TASKS';
  title: string;
  todolistId: string;
};

export type ChangeStatusTasksActionType = {
  type: 'CHANGE-TASKS-STATUS';
  id: string;
  isDone: boolean;
  todolistId: string;
};

export type ChangeTitleTasksActionType = {
  type: 'CHANGE-TASKS-TITLE';
  id: string;
  title: string;
  todolistId: string;
};

type ActionsType =
  | RemoveTasksActionType
  | AddTasksActionType
  | ChangeStatusTasksActionType
  | ChangeTitleTasksActionType
  | AddTodolistActionType
  | RemoveTodolistActionType;

export const tasksReducer = (state: TasksStateType, action: ActionsType) => {
  switch (action.type) {
    case 'REMOVE-TASKS':
      return {
        ...state,
        [action.todolistId]: state[action.todolistId].filter(
          (t) => t.id != action.id
        ),
      };
    case 'ADD-TASKS':
      let task = { id: '0', title: action.title, isDone: false };

      return {
        ...state,
        [action.todolistId]: [task, ...state[action.todolistId]],
      };

    case 'CHANGE-TASKS-STATUS':
      return {
        ...state,
        [action.todolistId]: state[action.todolistId].map((s) =>
          s.id === action.id ? { ...s, isDone: action.isDone } : s
        ),
      };

    case 'CHANGE-TASKS-TITLE':
      return {
        ...state,
        [action.todolistId]: state[action.todolistId].map((s) =>
          s.id === action.id ? { ...s, title: action.title } : s
        ),
      };
    case 'ADD-TODOLIST':
      const stateCopy = { ...state };
      stateCopy[action.todolistId] = [];
      return stateCopy;

    case 'REMOVE-TODOLIST':
      const newState = { ...state };
      delete newState[action.id];
      return newState;

    default:
      throw new Error("I don't understand this type");
  }
};

export const removeTaskAC = (
  id: string,
  todolistId: string
): RemoveTasksActionType => {
  return { type: 'REMOVE-TASKS', id: id, todolistId: todolistId };
};

export const addTaskAC = (
  title: string,
  todolistId: string
): AddTasksActionType => {
  return { type: 'ADD-TASKS', title: title, todolistId: todolistId };
};

export const changeTaskStatusAC = (
  id: string,
  isDone: boolean,
  todolistId: string
): ChangeStatusTasksActionType => {
  return {
    type: 'CHANGE-TASKS-STATUS',
    id: id,
    isDone: isDone,
    todolistId: todolistId,
  };
};

export const changeTaskTitleAC = (
  id: string,
  title: string,
  todolistId: string
): ChangeTitleTasksActionType => {
  return {
    type: 'CHANGE-TASKS-TITLE',
    id: id,
    title: title,
    todolistId: todolistId,
  };
};
