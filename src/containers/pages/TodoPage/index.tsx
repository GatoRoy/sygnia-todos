import React, { FC } from 'react';
import { PageBase, PageBaseProps } from '../PageBase';
import { StyledPageRow } from '../styled';
import { StyledTodoListWrapper } from './styled';
import apiSyg from '../../../store/api/apiSygTodos';
import { Typography } from '../../../components/controls/Typography';
import { Button } from '../../../components/controls/buttons/Button';
import { Stack } from '../../../components/controls/Stack';

interface TodoPageProps extends PageBaseProps {}

const TodoPage: FC<TodoPageProps> = props => {
  const onAddNewTask = () => {
    apiSyg.createNewTodoTask("First New Task", 1).then(data => console.log("create new task -> ", data));
  };

  return (
    <PageBase {...props} className="todo-page" headline="Todo Tasks">
      <StyledPageRow>
        <Stack direction="row" spacing={1}>
          <Typography>
            TODO List
          </Typography>
          <Button onClick={onAddNewTask}>+ Add Task</Button>
        </Stack>
      </StyledPageRow>
      <StyledTodoListWrapper>
        TodoTaskTable
      </StyledTodoListWrapper>
    </PageBase>
  );
};

export default TodoPage;
