import React, { FC } from 'react';
// import { TodoTasksContext } from '../../store/hooks/UseTodoTasks/Context';
// import { useTodoTasksController } from '../../store/hooks/UseTodoTasks/controller';
import TodoPage from '../pages/TodoPage';

interface MainLayoutProps {}

const MainLayout: FC<MainLayoutProps> = props => {
  // const controller = useTodoTasksController();

  return (
    // <TodoTasksContext.Provider value={controller}>
    <TodoPage />
    // </TodoTasksContext.Provider>
  );
};

export default MainLayout;
