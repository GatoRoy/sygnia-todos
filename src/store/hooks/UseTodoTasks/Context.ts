import React, { createContext } from 'react';
import { ITodoTasksController } from '../../types';

interface ITodoTasksContext extends ITodoTasksController {}

export const TodoTasksContext = createContext<ITodoTasksContext | undefined>(
  undefined,
);

export const useTodoTasks = () => {
  const context = React.useContext(TodoTasksContext);
  if (context === undefined) {
    throw new Error('useTodoTasks must be used within a TodoTasksContext');
  }
  return context;
};
