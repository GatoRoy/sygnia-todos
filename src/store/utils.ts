import { IDisplayedPriority, PriorityValue, TaskStatus } from "./types";

export const isTaskStatusCompleted = (status: TaskStatus): boolean => status === 'complete';

export const getDisplayedPriority = (priorityValue: PriorityValue): IDisplayedPriority => {
    let displayedPriority: IDisplayedPriority;

    switch (priorityValue) {
        case 1:
            displayedPriority = {
                type: 'high',
                value: priorityValue,
                caption: "High",
            };
            break;

        case 2:
            displayedPriority = {
                type: 'medium',
                value: priorityValue,
                caption: "Medium",
            };
            break;

        case 3:
            displayedPriority = {
                type: 'low',
                value: priorityValue,
                caption: "Low",
            };
            break;
    }

    return displayedPriority;
};
