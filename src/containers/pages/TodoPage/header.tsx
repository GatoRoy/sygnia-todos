import React, { FC, useState } from 'react';
import { useTodoTasks } from '../../../store/hooks/UseTodoTasks/Context';
import { Typography } from '../../../components/controls/Typography';
import { Button } from '../../../components/controls/buttons/Button';
import { Stack } from '../../../components/controls/Stack';
import { Textbox } from '../../../components/controls/Textbox';
import { StyledTodoPageHeaderWrapper } from './styled';
import { ToggleSortButton } from '../../../components/ToggleSortButton';

interface TodoPageHeaderProps {}

export const TodoPageHeader: FC<TodoPageHeaderProps> = props => {
  const [newTaskTitle, setNewTaskTitle] = useState<string>();

  const { addNewTask, resetTasks } = useTodoTasks();

  const onAddNewTask = () => {
    addNewTask("New Task", 2);
  };

  const onResetTasks = () => {
    resetTasks();
  };

  return (
    <StyledTodoPageHeaderWrapper>
      <Stack direction="row" spacing={1} sx={{ width: "calc(100% - 20rem)", }}>
        <Typography>
          TODO List
        </Typography>
        <Button onClick={onAddNewTask}>+ Add Task</Button>
        <Textbox value={newTaskTitle} onChange={setNewTaskTitle} placeholder='New Task Name' />
        <Button onClick={onResetTasks}>Reset Task</Button>
      </Stack>
      <Stack direction="row" spacing={1} sx={{ width: "10rem", }}>
        <ToggleSortButton />
      </Stack>
    </StyledTodoPageHeaderWrapper>
  );
};
