import { v1 } from 'uuid';
import { FilterValuesType, TodolistType } from './App';

type ActionType =
  | RemoveActionType
  | AddActionType
  | ChangeTitleActionType
  | ChangeFilterActionType;

export type RemoveActionType = {
  type: 'REMOVE-TODOLIST';
  id: string;
};

export type AddActionType = {
  type: 'ADD-TODOLIST';
  title: string;
};
export type ChangeTitleActionType = {
  type: 'CHANGE-TODOLIST-TITLE';
  id: string;
  title: string;
};
export type ChangeFilterActionType = {
  type: 'CHANGE-TODOLIST-FILTER';
  id: string;
  filter: FilterValuesType;
};

// меня вызовут и дадут мне стейт (почти всегда объект)
// и инструкцию (action, тоже объект)
// согласно прописанному type в этом action (инструкции) я поменяю state
export const todolistsReducer = (
  state: Array<TodolistType>,
  action: ActionType
) => {
  switch (action.type) {
    case 'REMOVE-TODOLIST':
      return state.filter((tl) => tl.id !== action.id);

    case 'ADD-TODOLIST':
      return [...state, { id: v1(), title: action.title, filter: 'all' }];
    case 'CHANGE-TODOLIST-TITLE':
      return state.map((s) =>
        s.id === action.id ? { ...s, title: action.title } : s
      );

    case 'CHANGE-TODOLIST-FILTER':
      return state.map((s) =>
        s.id === action.id ? { ...s, filter: action.filter } : s
      );

    default:
      throw new Error("I don't understand this type");
  }
};
export const RemoveTodolistAC = (todolistId: string): RemoveActionType => {
  return { type: 'REMOVE-TODOLIST', id: todolistId };
};

export const AddTodolistAC = (title: string): AddActionType => {
  return { type: 'ADD-TODOLIST', title: title };
};

export const ChangeTitleTodolistAC = (
  id: string,
  title: string
): ChangeTitleActionType => {
  return { type: 'CHANGE-TODOLIST-TITLE', id: id, title: title };
};

export const ChangeFilterTodolistAC = (
  id: string,
  filter: FilterValuesType
): ChangeFilterActionType => {
  return { type: 'CHANGE-TODOLIST-FILTER', id: id, filter: filter };
};
