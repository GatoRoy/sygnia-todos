export type TaskPriority = 1 | 2 | 3;
export type TaskStatus = 'complete' | 'incomplete';

export type SortField = 'priority' | 'status' | 'created_at';
export type SortOrder = 'asc' | 'desc';

export interface ITodoTask {
    created_at: string;
    id: string;
    priority: TaskPriority;
    status: TaskStatus;
    title: string;
}