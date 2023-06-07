export type PriorityValue = 1 | 2 | 3;
export type TaskStatus = 'complete' | 'incomplete';

export type SortField = 'priority' | 'status' | 'created_at';
export type SortOrder = 'asc' | 'desc';

export interface ISortParams {
    sortBy?: SortField;
    sortOrder?: SortOrder;
    filterStatus?: TaskStatus;
}

export interface IDisplayedPriority {
    type: string;
    value: PriorityValue;
    caption: string;
}

export interface ITodoTask {
    id: string;
    created_at: string;
    priority: PriorityValue;
    status: TaskStatus;
    title: string;
}
