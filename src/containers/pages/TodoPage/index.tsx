import React, { FC } from 'react';
import { PageBase, PageBaseProps } from '../PageBase';
import { StyledTodoListWrapper } from './styled';
import { useTodoTasks } from '../../../store/hooks/UseTodoTasks/Context';
import { ITodoTask, PriorityValue } from '../../../store/types';
import { isTaskStatusCompleted } from '../../../store/utils';
import { TodoPageHeader } from './header';
import { TodoTaskTable } from '../../../components/TodoTaskTable';

interface TodoPageProps extends PageBaseProps {}

export const TodoPage: FC<TodoPageProps> = props => {
  const { tasks, updateTaskStatus, updateTaskPriority } = useTodoTasks();

  const onTaskChecked = (task: ITodoTask) => {
    const newStatus = isTaskStatusCompleted(task.status) ? 'incomplete' : 'complete';
    updateTaskStatus(task.id, newStatus);
  };

  const onTaskPriorityChanged = (task: ITodoTask, newPriority: PriorityValue) => {
    updateTaskPriority(task.id, newPriority);
  };

  return (
    <PageBase {...props} className="todo-page" headline="Todo Tasks">
      <TodoPageHeader />
      <StyledTodoListWrapper>
        <TodoTaskTable items={tasks} onTaskChecked={onTaskChecked} onTaskPriorityChanged={onTaskPriorityChanged} />
      </StyledTodoListWrapper>
    </PageBase>
  );
};
