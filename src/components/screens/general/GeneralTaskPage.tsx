/* eslint-disable operator-linebreak */
import React from 'react';
import { useFilterTasks } from 'src/hooks';
import { useGetTasksQuery } from 'src/store/index.endpoints';

import { GeneralLoadingTaskItem } from './task-item/GeneralLoadingTaskItem';
import { GeneralTaskItem } from './task-item/GeneralTaskItem';

import './general-task-page.scss';

const GeneralTaskPage: React.FC = () => {
  const { data, isLoading } = useGetTasksQuery(null);
  const { filterData } = useFilterTasks(data);
  if (isLoading) {
    return (
      <div className="tasks">
        {[...Array(5)].map((_, i) => (
          <GeneralLoadingTaskItem key={i} />
        ))}
      </div>
    );
  }
  return (
    <div className="tasks">
      {data && filterData.map((task) => <GeneralTaskItem key={task.id} {...task} />)}
    </div>
  );
};

export { GeneralTaskPage };
