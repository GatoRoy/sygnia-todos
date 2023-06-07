import { API_HOST, API_KEY } from '../constants';
import { ITodoTask, TaskStatus, PriorityValue, ISortParams } from '../types';

//TODO:  move the fetch-reqeust functionality to a separated file

const createApiSygTodos = () => {
  const baseTodosUrl = `${API_HOST}/todos`;

  //GET /todos
  const loadTodoTasks = async (sortParams?: ISortParams): Promise<ITodoTask[]> => {
    const reqeustParams: string[] = [];
    if (sortParams) {
      const { sortBy, sortOrder, filterStatus } = sortParams;
      if (sortBy) { reqeustParams.push(`sort_by=${sortBy}`); }
      if (sortOrder) { reqeustParams.push(`sort_order=${sortOrder}`); }
      if (filterStatus) { reqeustParams.push(`filter_status=${filterStatus}`); }
    }
    const requestUrl = reqeustParams.length > 0 ? `${baseTodosUrl}?${reqeustParams.join('&')}` : baseTodosUrl;

    const response = await fetch(requestUrl, {
      method: 'GET',
      headers: {
        'x-api-key': API_KEY,
      }
    });
    return await response.json();
  };

  //PUT /todos/{id}/status
  const updateStatus = async (id: string, status: TaskStatus) => {
    const response = await fetch(`${baseTodosUrl}/${id}/status`, {
      method: 'PUT',
      headers: {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status }),
    });
    return await response.json();
  };

  //PUT /todos/{id}/priority
  const updatePriority = async (id: string, priority: PriorityValue) => {
    const response = await fetch(`${baseTodosUrl}/${id}/priority`, {
      method: 'PUT',
      headers: {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ priority }),
    });
    return await response.json();
  };

  //POST /todos
  const createNewTodoTask = async (title: string, priority: PriorityValue) => {
    const response = await fetch(baseTodosUrl, {
      method: 'POST',
      headers: {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json',
        crossorigin: 'anonymous',
      },
      body: JSON.stringify({ title, priority }),
    });
    return await response.json();
  };

  //GET /reset
  const resetTodoTasks = async (): Promise<ITodoTask[]> => {
    const response = await fetch(`${API_HOST}/reset`, {
      method: 'GET',
      headers: {
        'x-api-key': API_KEY,
      }
    });
    return await response.json();
  };

  return {
    loadTodoTasks,
    updateStatus,
    updatePriority,
    createNewTodoTask,
    resetTodoTasks,
  };
};

const apiSygTodos = createApiSygTodos();
export default apiSygTodos;