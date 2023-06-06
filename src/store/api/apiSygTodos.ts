import { API_HOST, API_KEY } from '../constants';
import { ITodoTask, TaskStatus, TaskPriority, SortField, SortOrder } from '../types';

//TODO:  move the fetch-reqeust functionality to a separated file

const createApiSygTodos = () => {
  //GET /todos
  const loadTodoTasks = (sortBy?: SortField, sortOrder?: SortOrder, filterStatus?: TaskStatus): Promise<ITodoTask[]> => {
    const reqeustParams: string[] = [];
    if (sortBy) { reqeustParams.push(`sort_by=${sortBy}`); }
    if (sortOrder) { reqeustParams.push(`sort_order=${sortOrder}`); }
    if (filterStatus) { reqeustParams.push(`filter_status=${filterStatus}`); }
    const requestUrl = reqeustParams.length > 0 ? `${API_HOST}?${reqeustParams.join('&')}` : API_HOST;

    return fetch(requestUrl, {
        headers: {
          'x-api-key': API_KEY,
        }
      })
      .then(response => response.json());
  };

  //PUT /todos/{id}/status
  const updateStatus = (id: string, status: TaskStatus) => {
    return fetch(`${API_HOST}/${id}/status`, {
      method: 'PUT',
      headers: {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status }),
    })
    .then(response => response.json());
    // .then(data => console.log(data));
  };

  //PUT /todos/{id}/priority
  const updatePriority = (id: string, priority: TaskPriority) => {
    return fetch(`${API_HOST}/${id}/priority`, {
      method: 'PUT',
      headers: {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ priority }),
    })
    .then(response => response.json());
    // .then(data => console.log(data));
  };

  //POST /todos
  const createNewTodoTask = (title: string, priority: number) => {
    return fetch(API_HOST, {
      method: 'POST',
      headers: {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json',
        crossorigin: 'anonymous',
      },
      body: JSON.stringify({ title, priority }),
    })
    .then(response => response.json());
    // .then(data => console.log(data));
  };

  //
  return {
    loadTodoTasks,
    updateStatus,
    updatePriority,
    createNewTodoTask,
  };
};

const apiSygTodos = createApiSygTodos();
export default apiSygTodos;