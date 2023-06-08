import React, { FC } from 'react';
import { PageBase, PageBaseProps } from '../PageBase';
import { StyledPageRow } from '../styled';
import { StyledTodoListWrapper } from './styled';
import { useTodoTasks } from '../../../store/hooks/UseTodoTasks/Context';
import { ITodoTask, PriorityValue } from '../../../store/types';
import { isTaskStatusCompleted } from '../../../store/utils';
import { Typography } from '../../../components/controls/Typography';
import { Button } from '../../../components/controls/buttons/Button';
import { TodoTaskTable } from '../../../components/TodoTaskTable';
import { Stack } from '../../../components/controls/Stack';

interface TodoPageProps extends PageBaseProps {}

export const TodoPage: FC<TodoPageProps> = props => {
  const { tasks, addNewTask, updateTaskStatus, updateTaskPriority, resetTasks } = useTodoTasks();

  const onAddNewTask = () => {
    addNewTask("First New Task", 1);//.then(data => console.log("create new task -> ", data));
  };

  const onTaskChecked = (task: ITodoTask) => {
    const newStatus = isTaskStatusCompleted(task.status) ? 'incomplete' : 'complete';
    updateTaskStatus(task.id, newStatus);
  };

  const onTaskPriorityChanged = (task: ITodoTask) => {
    const newPriority: PriorityValue = (task.priority < 3 ? task.priority + 1 : 1) as PriorityValue;
    updateTaskPriority(task.id, newPriority);
  };

  const onResetTasks = () => {
    resetTasks();//.then(data => console.log("reset -> ", data));
  };

  return (
    <PageBase {...props} className="todo-page" headline="Todo Tasks">
      <StyledPageRow>
        <Stack direction="row" spacing={1}>
          <Typography>
            TODO List
          </Typography>
          <Button onClick={onAddNewTask}>+ Add Task</Button>
          <Button onClick={onResetTasks}>Reset Task</Button>
        </Stack>
      </StyledPageRow>
      <StyledTodoListWrapper>
        <TodoTaskTable items={tasks} onTaskChecked={onTaskChecked} onTaskPriorityChanged={onTaskPriorityChanged} />
      </StyledTodoListWrapper>
    </PageBase>
  );
};
