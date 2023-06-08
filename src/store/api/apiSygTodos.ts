import { API_HOST, API_KEY } from '../constants';
import ajaxManager from './ajaxManager';
import { ITodoTask, TaskStatus, PriorityValue, ISortParams } from '../types';

const createApiSygTodos = () => {
  const baseTodosUrl = `${API_HOST}/todos`;
  const basicRequestOptions = {
    headers: {
      'x-api-key': API_KEY,
    },
  };

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

    return await ajaxManager.get(requestUrl, basicRequestOptions);
  };

  //PUT /todos/{id}/status
  const updateTaskStatus = async (id: string, status: TaskStatus) => {
    return await ajaxManager.put(`${baseTodosUrl}/${id}/status`, JSON.stringify({ status }), basicRequestOptions);
  };

  //PUT /todos/{id}/priority
  const updateTaskPriority = async (id: string, priority: PriorityValue) => {
    return await ajaxManager.put(`${baseTodosUrl}/${id}/priority`, JSON.stringify({ priority }), basicRequestOptions);
  };

  //POST /todos
  const createNewTodoTask = async (title: string, priority: PriorityValue) => {
    return await ajaxManager.post(`${baseTodosUrl}`, JSON.stringify({ title, priority }), basicRequestOptions);
  };

  //GET /reset
  const resetTodoTasks = async (): Promise<ITodoTask[]> => {
    return await ajaxManager.get(`${API_HOST}/reset`, basicRequestOptions);
  };

  return {
    loadTodoTasks,
    updateTaskStatus,
    updateTaskPriority,
    createNewTodoTask,
    resetTodoTasks,
  };
};

const apiSygTodos = createApiSygTodos();
export default apiSygTodos;