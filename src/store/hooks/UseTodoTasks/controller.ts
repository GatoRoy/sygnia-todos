import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useImmer } from 'use-immer';
import { ITodoData, ITodoTasksController, PriorityValue, TaskStatus } from '../../types';
import apiSyg from '../../api/apiSygTodos';
// import { NUMBER_OF_LIST_ITEMS_PER_PAGE } from '../../constants';

export const useTodoTasksController = (): ITodoTasksController => {
  //REMARK:  no need for routing
  // const navigate = useNavigate();

  const [todoData, setTodoData] = useImmer<ITodoData>({
    tasks: [],
    sortParams: {
      sortBy: "priority", 
      sortOrder: "desc", 
      // filterStatus: "incomplete",
    },
  });

  const loadTasks = async () => {
    const tasks = await apiSyg.loadTodoTasks(todoData.sortParams);

    console.log("load -> tasks=", tasks);

    setTodoData((draft: ITodoData) => {
      draft.tasks = tasks;
    });
  };

  const addNewTask = async (title: string, priority: PriorityValue) => {
    const response = await apiSyg.createNewTodoTask(title, priority);

    //reloading the tasks
    loadTasks();
  };

  const updateTaskStatus = async (id: string, status: TaskStatus) => {
    const currentTask = todoData.tasks.find(item => item.id === id);

    if (currentTask) {
      const response = await apiSyg.updateTaskStatus(id, status);

      //reloading the tasks
      loadTasks();
    }
  };

  const updateTaskPriority = async (id: string, priority: PriorityValue) => {
    const currentTask = todoData.tasks.find(item => item.id === id);

    if (currentTask) {
      const response = await apiSyg.updateTaskPriority(id, priority);

      //reloading the tasks
      loadTasks();
    }
  };

  const resetTasks = async () => {
    const response = await apiSyg.resetTodoTasks();

    //reloading the tasks
    loadTasks();
  };

  useEffect(() => {
    loadTasks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todoData.sortParams]);

  return {
    ...todoData,
    loadTasks,
    addNewTask,
    updateTaskStatus,
    updateTaskPriority,
    resetTasks,
  };
};
