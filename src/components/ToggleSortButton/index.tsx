import React, { FC } from 'react';
import { useTodoTasks } from '../../store/hooks/UseTodoTasks/Context';
import { ToggleButton } from '../controls/buttons/ToggleButton';
import { TaskStatus } from '../../store/types';

interface ToggleSortButtonProps {}

export const ToggleSortButton: FC<ToggleSortButtonProps> = () => {
    const { setFilterStatus } = useTodoTasks();

    const buttonOptions = {
        'incomplete': {
            value: 'incomplete',
            display: "incomplete",
            label: "incomplete-only-filter",
        },
        'all': {
            value: 'all',
            display: "All",
            label: "no-filter",
        },
    };

    const onOptionToggled = (selectedOptionValue: string | null) => {
        const filterStatus: TaskStatus | undefined = selectedOptionValue && selectedOptionValue !== 'all' ? (selectedOptionValue as TaskStatus) : undefined;
        setFilterStatus(filterStatus);
    };

    return (
        <ToggleButton options={buttonOptions} onOptionToggled={onOptionToggled} defaultValue={'all'} />
    );
};